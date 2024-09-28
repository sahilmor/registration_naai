// src/components/Form/InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
