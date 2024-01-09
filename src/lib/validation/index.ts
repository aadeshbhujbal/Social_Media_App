import * as z from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2, { message: "Too Short" }).max(50),
  name: z.string().min(2, { message: "Too Short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must Be At Least 8 Characters" }),
});
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must Be At Least 8 Characters" }),
});
