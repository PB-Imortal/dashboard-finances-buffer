import { z } from "zod";

export const formCreateAccount = z
  .object({
    lastName: z.string().min(2, "Required*").trim(),
    firstName: z.string().min(2, "Required*").trim(),
    email: z.string().email("Invalid value").min(1, "Required*").trim(),
    password: z
      .string()
      .min(1, "Required*")
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
        "Requirements not met"
      )
      .trim(),
    confirmPassword: z.string().min(1, "Required*").trim(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Divergent passwords",
    path: ["confirmPassword"],
  });

export type CreateAccountFields = z.infer<typeof formCreateAccount>;
