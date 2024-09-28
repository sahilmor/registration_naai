// src/app/page.tsx
'use client'; // Mark this as a Client Component

import React from "react";
import Link from "next/link";
import { cn } from "../utils/cn"; // Utility for conditionally joining classNames

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Welcome to Our Application
      </h1>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        Please <strong>Signup</strong> if you're new or <strong>Login</strong>{" "}
        if you already have an account to continue.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/signup"
          className="px-6 py-3 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600 transition-colors"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 rounded-md text-white font-medium bg-green-500 hover:bg-green-600 transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
