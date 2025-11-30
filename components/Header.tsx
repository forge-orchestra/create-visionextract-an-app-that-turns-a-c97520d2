import React from 'react';
import Link from 'next/link';
import { Home, Upload, Info } from 'lucide-react';

interface HeaderProps {
  links: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl font-bold text-gray-800 flex items-center">
              <Home className="w-6 h-6 mr-2" aria-hidden="true" />
              VisionExtract
            </a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <a className="text-gray-600 hover:text-gray-800 flex items-center">
                  {link.label === 'Upload' && <Upload className="w-5 h-5 mr-1" aria-hidden="true" />}
                  {link.label === 'About' && <Info className="w-5 h-5 mr-1" aria-hidden="true" />}
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;