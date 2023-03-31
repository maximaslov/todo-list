import React, { useContext } from "react";
import { TodosContext } from "../../context/Context";
import styles from "./Error.module.css";

const Error = () => {
  const data = useContext(TodosContext);
  return (
    <div className={styles.error}>
      <p>{data.errorMessage}</p>
    </div>
  );
};

export default Error;