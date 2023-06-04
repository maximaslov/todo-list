import React, { useContext } from "react";
import { TodoContext } from "../../context/Context";
import styles from "./Error.module.css";

const Error = () => {
  const data = useContext(TodoContext);
  return (
    <div className={styles.error}>
      <p>{data.errorMessage}</p>
    </div>
  );
};

export default Error;