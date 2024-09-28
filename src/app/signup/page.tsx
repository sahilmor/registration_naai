// src/app/signup/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { formState, UserFormData } from '../../recoil/atom'; // Corrected import path
import InputField from '../../components/Form/InputField';
import SelectField from '../../components/Form/SelectField';
import DatePickerField from '../../components/Form/DatePickerField';
import TimePickerField from '../../components/Form/TimePickerField';
import FileUploadField from '../../components/Form/FileUploadField';
import ProfilePicturePreview from '../../components/Form/ProfilePicturePreview';
import { signupSchema } from '../../schemas/formSchema'; // Import the signupSchema
import { saveState, loadState } from '../../utils/localStorage';
import { useRouter } from 'next/navigation';
// import { cn } from '../../utils/cn'; // Uncomment if needed

const Signup: React.FC = () => {
  const [form, setForm] = useRecoilState(formState);
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = loadState<UserFormData>('userForm');
    if (savedData) {
      setForm(savedData);
      setProfilePic(savedData.profilePicture);
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

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({
      ...prev,
      profilePicture: file,
    }));
    setProfilePic(file);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupSchema.safeParse(form); // Use signupSchema
    if (result.success) {
      // Validation passed
      saveState('userForm', form);
      setErrors({});
      alert('Form submitted successfully!');
      // Optionally, redirect or perform other actions

      setForm({
        name: '',
        phoneNumber: '',
        dateOfJoining: '',
        gender: '' as 'Male' | 'Female' | 'Other',
        profilePicture: null,
        shiftStartTime: '',
        shiftEndTime: '',
      });
      setProfilePic(null);

      localStorage.removeItem('userForm');

      router.push('/');
      
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
    setProfilePic(null);
    setErrors({});
    localStorage.removeItem('userForm');
  };

  return (
    <form onSubmit={handleSubmit} className="fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Signup Form
      </h2>
      <InputField
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        placeholder="Enter your phone number"
        value={form.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
      />
      <DatePickerField
        label="Date of Joining"
        name="dateOfJoining"
        placeholder="Select your date of joining"
        value={form.dateOfJoining}
        onChange={handleChange}
        error={errors.dateOfJoining}
      />
      <SelectField
        label="Gender"
        name="gender"
        options={[
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Other', label: 'Other' },
        ]}
        value={form.gender}
        onChange={handleChange}
        error={errors.gender}
      />
      <FileUploadField
        label="Profile Picture"
        name="profilePicture"
        onChange={handleFileChange}
        error={errors.profilePicture}
      />
      <ProfilePicturePreview file={profilePic} />
      
      {errors.shiftEndTime && (
        <p className="text-red-500 text-sm mb-4">{errors.shiftEndTime}</p>
      )}
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
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

export default Signup;
