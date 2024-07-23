import { z } from "zod";

export const formCreateAccount = z
  .object({
    lastName: z.string().min(2, "Required*"),
    firstName: z.string().min(2, "Required*"),
    email: z.string().email("Invalid value").min(1, "Required*"),
    password: z
      .string()
      .min(1, "Required*")
      .regex(/^(?=.*[A-Z])$/, "capital letter")
      .regex(/^(?=.*\d)$/, "digit")
      .regex(/^(?=.*[\W_])$/, "symbol (#,$,%,&,*,@,!,_)")
      .regex(/^[A-Za-z\d\W_]{8,}$/, "8 characters"),
    confirmPassword: z.string().min(1, "Required*"),
  })
  .refine((data) => data.confirmPassword !== data.password, {
    message: "Divergent passwords",
    path: ["confirmPassword"],
  });

export type CreateAccountFields = z.infer<typeof formCreateAccount>;
