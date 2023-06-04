import React, { useContext } from "react";
import { TodoContext } from "../../../context/Context";
import styles from "./TodoItem.module.css";
import { useState } from "react";
import { useRef } from "react";

const TodoCard = () => {
  const data = useContext(TodoContext);
  const { todoCardData, updateTodoItems, closeTodoCard, showTodoCard, todoItems } = data;
  const { title, description, id, status } = todoCardData;

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMoreMenuContainer, setShowMoreMenuContainer] = useState(false);
  const moreBtn = useRef(null)

  const openMoreMenu = () => {
    setShowMoreMenuContainer(true);
    setShowMoreMenu(true);
  };

  const closeMoreMenu = (event) => {
    if(event.target !== moreBtn.current){
      setShowMoreMenu(false)
      setTimeout(() => {
        setShowMoreMenuContainer(false)
      }, 300);
    }
  }
  const onDeleteButtonClick = () => {
    const newTodoItems = todoItems.filter((todo, index) => index !== id);
    updateTodoItems(newTodoItems);
    closeTodoCard();
  };

  const onCloseCardButtonClick = () => {
    closeTodoCard();
  };

  return (
    <div className={styles.todoCardContainer} onClick={closeMoreMenu}>
      <div
        className={showTodoCard ? styles.todoCard : styles.hiddenTodoCard}
      >
        <div className={styles.buttons}>
        {!showMoreMenuContainer && (
          <div>
            <button ref={moreBtn} className={styles.openMoreMenuBtn} onClick={openMoreMenu}> </button>
          </div>
        )}
          {showMoreMenuContainer && (
            <div className={showMoreMenu ? styles.modalWindow : styles.hiddenModalWindow}>
              <button
                className={styles.delButton}
                onClick={onDeleteButtonClick}
              >
                Delete
              </button>
              <button className={styles.editButton}>Edit</button>
            </div>
          )}
          <div></div>
          <button
            className={styles.closeButton}
            onClick={onCloseCardButtonClick}
          >
            x
          </button>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          <p>Description: </p>
          <p>{description}</p>
        </div>
        <p>
          Status:{" "}
          <span className={status ? styles.doneStatus : styles.notDoneStatus}>
            {status ? "DONE" : "NOT DONE"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
