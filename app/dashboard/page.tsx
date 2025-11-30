'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, AlertCircle } from 'lucide-react';
import { fetchUserData, fetchAnalysisResults } from '@/lib/api';
import { UserData, AnalysisResult } from '@/types';
import 'tailwindcss/tailwind.css';

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserData();
        const results = await fetchAnalysisResults();
        setUserData(user);
        setAnalysisResults(results);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 flex items-center">
          <AlertCircle className="mr-2" />
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">User Data</h2>
          {userData ? (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </div>
          ) : (
            <p>No user data available.</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Analysis Results</h2>
          {analysisResults && analysisResults.length > 0 ? (
            <ul>
              {analysisResults.map((result, index) => (
                <li key={index} className="mb-2">
                  {result.title}: {result.value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No analysis results available.</p>
          )}
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => router.push('/upload')}
      >
        <Upload className="inline-block mr-2" />
        Upload New Screenshot
      </button>
    </div>
  );
};

export default DashboardPage;