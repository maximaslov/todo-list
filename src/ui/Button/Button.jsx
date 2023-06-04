import React from "react";
import styles from "./Button.module.css";

const Button = ({disabled, type, label, onClick}) => {
  return (
    <button
      className={styles.todoBtn}
      disabled={disabled && true}
      type={type}
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
};

export default Button;
