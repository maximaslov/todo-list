import React, { useContext } from "react";
import { TodosContext } from "../../../context/Context";
import styles from "./TodoItem.module.css";

const TodoItem = ({ title, description, id, status }) => {
  const data = useContext(TodosContext);

  const onTodoItemClick = (e) => {
    if(!data.showTodoCardContainer && !data.showNewTodoForm) {
      data.setTodoCardData({
        title,
        description,
        id,
        status,
      });
      data.openTodoCard();
    } else {
      data.closeTodoCard();
    }
  };

  const onCheckboxClick = (elem) => {
    elem.stopPropagation();
    if (!data.showNewTodoForm && !data.showTodoCard) {
      const newTodos = data.todos.map((todo, i) =>
        i === id - 1 ? { ...todo, status: !todo.status } : todo
      );
      data.updateTodos(newTodos);
    }
  };

  const maxLength = 16;

  return (
    <div onClick={onTodoItemClick} className={styles.todoItemContainer}>
      {/* <div> */}
        <p>{id}</p>
      {/* </div> */}
      {/* <div> */}
        <p className={styles.itemTitle}>{title.length > maxLength ? title.slice(0, 15) + "..." : title}</p>
      {/* </div> */}
      {/* <div> */}
        <p className={styles.itemDescription}>
          {description.length > maxLength
            ? description.slice(0, 15) + "..."
            : description}
        </p>
      {/* </div> */}
      {/* <div> */}
        <input className={styles.checkbox}
          onClick={(e) => e.stopPropagation()}
          checked={status}
          onChange={onCheckboxClick}
          type="checkbox"
          name={id}
          id={id}
        />
      {/* </div> */}
    </div>
  );
};

export default TodoItem;