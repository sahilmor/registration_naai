// src/components/UI/DarkModeToggle.tsx
'use client';

import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
    >
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;
