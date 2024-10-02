import { z } from "zod";

export const passwordSchema = z
  .string({
    required_error: "Password is required.",
    invalid_type_error: "Password is too weak.",
  })
  .min(8, {
    message: "Password must be at least 8 characters long.",
  })
  .max(32, {
    message: "Password must be 32 characters or less.",
  })
  .regex(new RegExp(/(?=.*[a-z]).+$/), {
    message: "Password must contain at least one lowercase letter.",
  })
  .regex(new RegExp(/(?=.*[A-Z]).+$/), {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(new RegExp(/(?=.*[0-9]).+$/), {
    message: "Password must contain at least one number.",
  })
  .regex(new RegExp(/(?=.*[!@#$%^&*()_+{}\[\]:;"'<>?,./~`-]).+$/), {
    message: "Password must contain at least one special character.",
  });
