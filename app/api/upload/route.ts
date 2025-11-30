import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // Adjust the origin as needed
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// TypeScript types
interface UploadResponse {
  success: boolean;
  message: string;
  data?: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<UploadResponse>) {
  await runMiddleware(req, res, cors);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Error parsing the form' });
        return;
      }

      const file = files.screenshot;
      if (!file) {
        res.status(400).json({ success: false, message: 'No file uploaded' });
        return;
      }

      try {
        const data = await fs.readFile(file.filepath);
        // Process the screenshot data here
        res.status(200).json({ success: true, message: 'File uploaded successfully', data: {} });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Error processing the file' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}