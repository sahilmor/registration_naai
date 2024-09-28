// src/components/Form/ProfilePicturePreview.tsx
'use client';

/**
 * ProfilePicturePreview Component
 * Displays a preview of the uploaded profile picture.
 *
 * Props:
 * - file: The selected File object representing the profile picture.
 */
import React, { useEffect, useState } from 'react';

interface ProfilePicturePreviewProps {
  file: File | null;
}

const ProfilePicturePreview: React.FC<ProfilePicturePreviewProps> = ({ file }) => {
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (!file) {
      setPreview('');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [file]);

  if (!file) return null;

  return (
    <div className="mb-4">
      <p className="text-gray-700 dark:text-gray-200">Profile Picture Preview:</p>
      <img
        src={preview}
        alt="Profile Preview"
        className="mt-2 w-32 h-32 object-cover rounded-full"
      />
    </div>
  );
};

export default ProfilePicturePreview;
