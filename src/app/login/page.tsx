// src/app/login/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { formState, UserFormData } from '../../recoil/atom'; // Correct import path
import InputField from '../../components/Form/InputField';
import { loginSchema } from '../../schemas/formSchema'; // Import the loginSchema
import { saveState, loadState } from '../../utils/localStorage';
// import { cn } from '../../utils/cn'; // Uncomment if needed

const Login: React.FC = () => {
  const [form, setForm] = useRecoilState(formState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load data from localStorage on mount 
  useEffect(() => {
    const savedData = loadState<UserFormData>('userForm');
    if (savedData) {
      setForm(savedData);
    }
  }, [setForm]);

  // Save data to localStorage whenever form changes
  useEffect(() => {
    saveState('userForm', form);
  }, [form]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(form); // Use loginSchema
    if (result.success) {
      // Validation passed
      saveState('userForm', form);
      setErrors({});
      alert('Login successful!');
      // Optionally, redirect or perform other actions
    } else {
      // Validation failed
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          const fieldName = err.path[0];
          fieldErrors[fieldName] = err.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  // Handle clear form
  const handleClear = () => {
    setForm({
      name: '',
      phoneNumber: '',
      dateOfJoining: '',
      gender: '' as 'Male' | 'Female' | 'Other',
      profilePicture: null,
      shiftStartTime: '',
      shiftEndTime: '',
    });
    setErrors({});
    localStorage.removeItem('userForm');
  };

  return (
    <form onSubmit={handleSubmit} className="fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Login
      </h2>
      <InputField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
      />
      {/* Add additional fields as needed for login */}
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Login;
