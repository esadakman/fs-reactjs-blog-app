import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  usernameEmail: Yup.string()
    .required("Please fill out this field") 
    .min(3, "Username or email should be at least 3 characters"),
  // .max(20, "Username or email should be at most 20 characters"),
  // .required("Please fill out user name"),
  // email: Yup.string()
  // .email("Please enter a valid email address"),
  // .required("Please fill out email field"),

  password: Yup.string()
    .required("Please fill out this field")
    .min(8, "Password should be at least 8 characters"),
});
