import { z } from "zod";

export const formCreateAccount = z
  .object({
    lastName: z.string().min(2, "Required*").trim(),
    firstName: z.string().min(2, "Required*").trim(),
    email: z.string().min(1, "Required*").email("Invalid value").trim(),
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

export const formLogin = z.object({
    email: z.string().email("Please use a valid e-mail address").min(1, "Required").trim(),
    password: z.string().min(1, "Required").trim(),
})

export type FormLoginField = z.infer<typeof formLogin>

export const profileEditForm = z.object({
  lastName: z
    .string()
    .min(2, "Required*")
    .transform((val) => val.trim()),
  firstName: z
    .string()
    .min(2, "Required*")
    .transform((val) => val.trim()),
  dateOfBirth: z
    .string()
    .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), "Invalid date format. Expected YYYY-MM-DD")
    .transform((val) => val.trim()),

  email: z
    .string()
    .email("Please use a valid e-mail address")
    .min(1, "Required")
    .trim(),
  password: z.string().min(1, "Required").trim(), // use refine method later to validate if user really exists based on dummy backend return data
});

export type FormLoginField = z.infer<typeof formLogin>;
