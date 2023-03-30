import React, { useContext, useState } from "react";
import styles from "./NewTodoForm.module.css";
import { TodosContext } from "../../context/Context";
import { todoFormSchema } from "./todoFormSchema";
import { useFormik } from "formik";

const NewTodoForm = () => {
  const data = useContext(TodosContext);
  const [touchedFields, setTouchedFields] = useState({});

  const onClose = () => {
    data.closeForm();
  };

  const formik = useFormik({
    initialValues: { title: "", description: "" },
    validationSchema: todoFormSchema,
    onSubmit: (values, { resetForm }) => {
      const newTodo = {
        title: values.title,
        description: values.description,
        status: false,
      };
      const newTodoList = [...data.todos, newTodo];
      data.onFormSubmit(newTodoList);
      resetForm();
    },
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const isTitleError = formik.errors.title && touchedFields.title;
  const isDescriptionError =
    formik.errors.description && touchedFields.description;

  return (
    <div className={styles.todoFormContaner}>
      <div 
      className={data.showTodoFormBox ? styles.todoFormBox : styles.hidenTodoFormBox}
      >
        <form className={styles.todoForm} onSubmit={formik.handleSubmit}>
          <div>
            <input
              className={isTitleError ? styles.inputError : styles.input}
              value={formik.values.title}
              type="text"
              name="title"
              placeholder={
                isTitleError
                  ? "The field must not be empty"
                  : "Enter todo title"
              }
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
            <input
              className={isDescriptionError ? styles.inputError : styles.input}
              value={formik.values.description}
              type="text"
              name="description"
              placeholder={
                isDescriptionError
                  ? "The field must not be empty "
                  : "Enter todo description"
              }
              onChange={formik.handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button
            className={styles.todoBtn}
            disabled={!formik.values.title || !formik.values.description}
            type={"submit"}
          >
            Create
          </button>
        </form>
        <button onClick={onClose} className={styles.todoBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewTodoForm;