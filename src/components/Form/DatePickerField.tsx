// src/components/Form/DatePickerField.tsx
'use client';

import React from 'react';

interface DatePickerFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200">{label}</label>
      <input
        type="date"
        name={name}
        value={value}
        placeholder={placeholder}
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

export default DatePickerField;
