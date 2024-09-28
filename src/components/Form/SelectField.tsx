// src/components/Form/SelectField.tsx
'use client';

import React from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full p-2 border ${
          error
            ? 'border-red-500'
            : 'border-gray-300 dark:border-gray-600'
        } rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
