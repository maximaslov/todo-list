import React, { useContext } from "react";
import styles from "./NewTodoButton.module.css";
import { TodosContext } from "../../context/Context";

const NewTodoButton = () => {
  const data = useContext(TodosContext);

  const onBtnClick = () => {
    data.hideNewTodoButton();
    data.showForm();
  };

  return (
    <div
      className={
        data.showNewTodoItemBtn
          ? styles.newTodoBtnContainer
          : styles.hiddenNewTodoBtnContainer
      }
    >
      <button onClick={data.showNewTodoItemBtn ? onBtnClick : null} className={!data.hideAddButton ? styles.newTodoBtn : styles.hideNewTodoBtn}>
        <p>New Todo</p>
      </button>
    </div>
  );
};

export default NewTodoButton;