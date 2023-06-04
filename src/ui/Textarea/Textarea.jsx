import React, { useContext } from "react";
import styles from "./Textarea.module.css";
import { TodoContext } from "../../context/Context";
import { placeholderText } from "../../utils/definitions/textareaDefinitions";

const Textarea = ({value, onChange }) => {
  const data = useContext(TodoContext);
  const { language } = data;
  const handleChange = (event) => {
    onChange?.(event);
  };

  return (
    <textarea
      className={styles.textarea}
      value={value}
      type="text"
      name="description"
      placeholder={placeholderText(language)}
      onChange={handleChange}
    />
  );
};

export default Textarea;
