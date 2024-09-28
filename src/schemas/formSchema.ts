// src/schemas/formSchema.ts
import { z } from 'zod';

// Base schema containing all fields
const baseFormSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: 'Phone Number must be exactly 10 digits' }),
  dateOfJoining: z
    .string()
    .nonempty({ message: 'Date of Joining is required' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    }),
  gender: z.enum(['Male', 'Female', 'Other'], {
    errorMap: () => ({ message: 'Gender is required' }),
  }),
  profilePicture: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file ||
        (file instanceof File &&
          ['image/jpeg', 'image/png'].includes(file.type)),
      {
        message: 'Profile Picture must be a JPEG or PNG image',
      }
    ),
  shiftStartTime: z
    .string()
    .nonempty({ message: 'Shift start time is required' }),
  shiftEndTime: z
    .string()
    .nonempty({ message: 'Shift end time is required' }),
});

// Signup schema with additional refinements
export const signupSchema = baseFormSchema.refine(
  (data) => {
    const start = new Date(`1970-01-01T${data.shiftStartTime}:00Z`);
    const end = new Date(`1970-01-01T${data.shiftEndTime}:00Z`);
    return end > start;
  },
  {
    message: 'Shift end time must be after start time',
    path: ['shiftEndTime'],
  }
);

// Login schema with only necessary fields
export const loginSchema = baseFormSchema.pick({
  name: true,
  phoneNumber: true,
});
