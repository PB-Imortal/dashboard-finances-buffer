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
  email: z
    .string()
    .email("Please use a valid e-mail address")
    .min(1, "Required")
    .trim(),
  password: z.string().min(1, "Required").trim(),
});

export type FormLoginField = z.infer<typeof formLogin>;

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
    .refine(
      (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
      "Invalid date format. Expected YYYY-MM-DD"
    )
    .transform((val) => val.trim()),
  email: z
    .string()
    .email("Invalid value")
    .min(1, "Required*")
    .regex(/^[^\s@]+@[^\s@]+\.(com|com\.br)$/, "Invalid email format.")
    .transform((val) => val.trim()),
  address: z
    .string()
    .min(1, "Required*")
    .transform((val) => val.trim())
    .refine(
      (value) => /\d/.test(value) && value.split(/\s+/).length >= 2,
      "Address must have at least 2 words and one number"
    ),
  country: z.string().min(1, "Required*"),
});

export type ProfileForm = z.infer<typeof profileEditForm>;

export const formFilter = z.object({
  category: z.string(),
  date: z.string(),
  term: z
  .string()
  .regex(/^[a-zA-z\s]*$/, "Invalid term."),
  type: z.string(),
});

export type FormFilter = z.infer<typeof formFilter>;