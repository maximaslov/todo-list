import React, { useContext } from "react";
import styles from "./NewTodoForm.module.css";
import { TodoContext } from "../../context/Context";
import { todoFormSchema } from "./todoFormSchema";
import { useFormik } from "formik";
import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import Button from "../../ui/Button/Button";

const NewTodoForm = () => {
  const data = useContext(TodoContext);
  const { todoItems, onFormSubmit, showError, closeForm } = data;

  const onClose = () => {
    closeForm();
  };

  const formik = useFormik({
    initialValues: { title: "", description: "" },
    onSubmit: (values, { resetForm }) => {
      todoFormSchema
        .validate(values)
        .then(() => {
          const newTodo = {
            title: values.title,
            description: values.description,
            status: false,
          };
          const newTodoList = [...todoItems, newTodo];
          onFormSubmit(newTodoList);
          resetForm();
        })
        .catch((err) => {
          showError(err);
        });
    },
  });

  return (
    <div className={styles.todoFormContainer}>
      <div
        className={
          data.showTodoFormBox ? styles.todoFormBox : styles.hiddenTodoFormBox
        }
      >
        <form className={styles.todoForm} onSubmit={formik.handleSubmit}>
          <div>
            <Input value={formik.values.title} onChange={formik.handleChange} />
            <Textarea
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <Button
            disabled={!formik.values.title || !formik.values.description}
            type="submit"
            label="Create"
          />
        </form>
        <Button onClick={onClose} label="Cancel" />
      </div>
    </div>
  );
};

export default NewTodoForm;
