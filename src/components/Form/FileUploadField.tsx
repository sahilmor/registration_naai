// src/components/Form/FileUploadField.tsx
'use client';

import React from 'react';

interface FileUploadFieldProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  name,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200">{label}</label>
      <input
        type="file"
        name={name}
        accept="image/jpeg, image/png"
        onChange={onChange}
        className={`mt-1 block w-full p-2 border ${
          error
            ? 'border-red-500'
            : 'border-gray-300 dark:border-gray-600'
        } rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FileUploadField;
