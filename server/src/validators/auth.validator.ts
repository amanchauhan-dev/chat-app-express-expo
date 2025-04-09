import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(4, "name must be at least 4 characters long"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginSchema = z.object({
  username: z.string({ required_error: 'username or email is required' }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
