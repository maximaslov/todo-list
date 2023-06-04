import React, { useContext } from "react";
import styles from "./NewTodoButton.module.css";
import { TodoContext } from "../../context/Context";

const NewTodoButton = () => {
  const data = useContext(TodoContext);
  const { showNewTodoItemBtn, hideNewTodoButton, showForm, hideAddButton } =
    data;

  const onBtnClick = () => {
    hideNewTodoButton();
    showForm();
  };

  return (
    <div className={styles.background}>
      <div
        className={
          showNewTodoItemBtn
            ? styles.newTodoBtnContainer
            : styles.hiddenNewTodoBtnContainer
        }
      >
        <button
          onClick={showNewTodoItemBtn ? onBtnClick : null}
          className={!hideAddButton ? styles.newTodoBtn : styles.hideNewTodoBtn}
        >
          <p>+</p>
        </button>
      </div>
    </div>
  );
};

export default NewTodoButton;
