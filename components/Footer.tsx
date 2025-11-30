import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  siteName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ siteName, year }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <LucideIcon name="globe" className="w-6 h-6 text-white" aria-hidden="true" />
          <span className="text-lg font-semibold">{siteName}</span>
        </div>
        <div className="mt-4 md:mt-0">
          <nav className="flex space-x-4">
            <Link href="/about">
              <a className="hover:underline" aria-label="About Us">About</a>
            </Link>
            <Link href="/contact">
              <a className="hover:underline" aria-label="Contact Us">Contact</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:underline" aria-label="Privacy Policy">Privacy</a>
            </Link>
          </nav>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-sm">&copy; {year} {siteName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;