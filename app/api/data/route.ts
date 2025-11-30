import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST'],
  origin: '*',
});

// Helper method to run middleware
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

// Define request body schema
const postDataSchema = z.object({
  image: z.string().url(),
});

// Define response data type
type ResponseData = {
  success: boolean;
  data?: any;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await runMiddleware(req, res, cors);

  if (req.method === 'GET') {
    res.status(200).json({ success: true, data: 'Endpoint is working' });
  } else if (req.method === 'POST') {
    try {
      const parsedData = postDataSchema.parse(req.body);
      // Process the image and convert to structured data (mocked for example)
      const structuredData = { text: 'Extracted text from image' }; // Replace with actual processing logic
      res.status(200).json({ success: true, data: structuredData });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: 'Invalid input data' });
      } else {
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}