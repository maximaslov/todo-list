import * as Yup from "yup";

export const todoFormSchema = Yup.object().shape({
  title: Yup.string()
    .required("The field must not be empty")
    .max(25, "Title must be no more than 25 characters"),
  description: Yup.string()
    .required("The field must not be empty")
    .max(120, "Description must be no more than 120 characters"),
});
