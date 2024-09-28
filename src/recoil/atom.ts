// src/recoil/atoms.ts
import { atom } from 'recoil';
import { z } from 'zod';
import { signupSchema } from '../schemas/formSchema';

// Infer TypeScript type from Zod schema
export type UserFormData = z.infer<typeof signupSchema>;

// Create a Recoil atom to hold the form state
export const formState = atom<UserFormData>({
  key: 'formState', // unique ID (with respect to other atoms/selectors)
  default: {
    name: '',
    phoneNumber: '',
    dateOfJoining: '',
    gender: '' as 'Male' | 'Female' | 'Other',
    profilePicture: null,
    shiftStartTime: '',
    shiftEndTime: '',
  },
});
