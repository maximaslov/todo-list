import React, { useContext } from "react";
import styles from "./Input.module.css";
import { placeholderText } from "../../utils/definitions/inputDefinitions";
import { TodoContext } from "../../context/Context";

const Input = ({ value, onChange }) => {
  const data = useContext(TodoContext);
  const { language } = data;
  const handleChange = (event) => {
    onChange?.(event);
  };

  return (
    <input
      className={styles.input}
      value={value}
      type="text"
      name="title"
      placeholder={placeholderText(language)}
      onChange={handleChange}
    />
  );
};

export default Input;
