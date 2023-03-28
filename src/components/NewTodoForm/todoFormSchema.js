import * as Yup from "yup";

export const todoFormSchema = Yup.object().shape({
  title: Yup.string().required("The field must not be empty"),
  description: Yup.string().required("The field must not be empty"),
});