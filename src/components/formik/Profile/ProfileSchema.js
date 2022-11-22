import * as Yup from "yup";
const regMatch =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

export const profileSchema = Yup.object().shape({
  user: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username should be at least 4 characters")
      .max(20, "Username should be at most 20 characters")
      .required("Please fill out user name"),

    first_name: Yup.string()
      .min(3, "Username should be at least 3 characters")
      .max(20, "Must be at most 20 characters")
      .required("Please enter a first name"),

    last_name: Yup.string()
      .min(2, "Username should be at least 2 characters")
      .max(20, "Must be at most 20 characters")
      .required("Please enter a last name"),

    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please fill out this field"),
  }),

  image: Yup.string()
    .matches(regMatch, "Please enter a correct url!")
    .required("Please fill out this field"),
});
