import React from 'react';
import { Metadata } from 'next';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LucideIcon } from 'lucide-react';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'VisionExtract - Transform Screenshots into Data',
  description: 'Convert screenshots into structured data seamlessly with VisionExtract.',
  keywords: 'VisionExtract, screenshot, structured data, Next.js, Tailwind CSS',
  author: 'Your Name',
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default MyApp;