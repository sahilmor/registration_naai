// src/components/Layout/Layout.tsx
'use client'; // Ensure this is included

import React from 'react';
import Link from 'next/link';
import DarkModeToggle from '../ui/DarkModeToggle'; // Ensure correct path
import { cn } from '../../utils/cn'; // Adjust path to match your directory structure

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <nav className="mb-4 flex items-center justify-between w-full max-w-md">
        <div>
          <Link
            href="/signup"
            className={cn(
              'mx-2 text-blue-500 hover:underline dark:text-blue-300'
            )}
          >
            Signup
          </Link>
          <Link
            href="/login"
            className={cn(
              'mx-2 text-blue-500 hover:underline dark:text-blue-300'
            )}
          >
            Login
          </Link>
        </div>
        <DarkModeToggle />
      </nav>
      <main className="w-full max-w-md p-8 bg-white dark:bg-gray-700 shadow-md rounded-md">
        {children}
      </main>
    </div>
  );
};

export default Layout;
