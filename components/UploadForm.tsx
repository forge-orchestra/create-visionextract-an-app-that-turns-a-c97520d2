import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface UploadFormProps {
  onUpload: (file: File) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full max-w-md mx-auto">
      <label htmlFor="file-upload" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <Upload className="w-8 h-8 text-gray-500" />
        <span className="ml-2 text-gray-500">Click to upload a screenshot</span>
        <input 
          id="file-upload" 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="hidden" 
          aria-label="File upload"
        />
      </label>
      {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
      <button 
        type="submit" 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={!file}
        aria-disabled={!file}
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;