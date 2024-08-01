import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});
export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
  imageUrl: z.string().optional(),
  carModel: z.string().min(1),
  carMake: z.string().min(1),
  carYear: z.string().regex(/^\d{4}$/),
  carPrice: z.string().transform((value) => Number(value)),
  carMileage: z.string().transform((value) => Number(value)),
});
