'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <UploadCloud className="w-8 h-8 text-blue-500" />,
    title: 'Upload Screenshots',
    description: 'Easily upload your screenshots for processing.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: 'Structured Data',
    description: 'Convert images into structured data formats.',
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    title: 'Error Handling',
    description: 'Robust error handling ensures smooth operations.',
  },
];

const Page: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate data fetching or processing
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleUpload = () => {
    setLoading(true);
    // Simulate upload process
    setTimeout(() => {
      setLoading(false);
      router.push('/upload-success');
    }, 2000);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h1 className="text-2xl font-bold mt-4">Something went wrong</h1>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">VisionExtract</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transform Screenshots into Structured Data</h2>
          <p className="text-lg text-gray-600">Upload your screenshots and let VisionExtract do the rest.</p>
          <button
            onClick={handleUpload}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Upload Screenshot'}
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg">
              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;