import React, { useContext } from "react";
import { TodoContext } from "../../../context/Context";
import styles from "./TodoItem.module.css";

const TodoItem = ({ title, description, id, status }) => {
  const data = useContext(TodoContext);

  const {
    showTodoCardContainer,
    showNewTodoForm,
    setTodoCardData,
    openTodoCard,
    closeTodoCard,
    showTodoCard,
    todoItems,
    updateTodoItems,
    maxLength,
  } = data;

  const onTodoItemClick = () => {
    if (!showTodoCardContainer && !showNewTodoForm) {
      setTodoCardData({
        title,
        description,
        id,
        status,
      });
      openTodoCard();
    } else {
      closeTodoCard();
    }
  };

  const onCheckboxClick = (elem) => {
    elem.stopPropagation();
    if (!showNewTodoForm && !showTodoCard) {
      const newTodoItems = todoItems.map((todo, i) =>
        i === id ? { ...todo, status: !todo.status } : todo
      );
      updateTodoItems(newTodoItems);
    }
  };

  return (
    <div onClick={onTodoItemClick} className={styles.todoItemContainer}>
      <p>{id}</p>
      <p className={styles.itemTitle}>
        {title.length > maxLength
          ? title.slice(0, maxLength - 1) + "..."
          : title}
      </p>

      <p className={styles.itemDescription}>
        {description.length > maxLength
          ? description.slice(0, maxLength - 1) + "..."
          : description}
      </p>
      <div className={styles.input}>
        <input
          className={styles.checkbox}
          onClick={(event) => event.stopPropagation()}
          checked={status}
          onChange={onCheckboxClick}
          type="checkbox"
          name={id}
          id={id}
        />
      </div>
    </div>
  );
};

export default TodoItem;
