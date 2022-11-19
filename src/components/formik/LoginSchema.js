import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username should be at least 8 characters")
    .max(20, "Username should be at most 20 characters")
    .required("Please fill out user name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please fill out email field"),

  password: Yup.string()
    .required("Please fill out password field")
    .min(8, "Password should be at least 8 characters"),
});
