import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../../context/Context";
import styles from "./TodoItem.module.css";

const TodoItem = ({ title, description, id, status }) => {
  const data = useContext(TodosContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [maxLength, setMaxLength] = useState(16);

  //КОРОЧЕ НУЖНО ПОМЕНЯТЬ maxLength при изменении экрана и сделать перерендер документа.

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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width < 600) {
      setMaxLength(6);
    } else {
      setMaxLength(16);
    }
  }, [width]);

  return (
    <div onClick={onTodoItemClick} className={styles.todoItemContainer}>
      {/* <div> */}
        <p>{id}</p>
      {/* </div> */}
      {/* <div> */}
        <p className={styles.itemTitle}>{title.length > maxLength ? title.slice(0, maxLength - 1) + "..." : title}</p>
        {/* <p className={styles.itemTitle}>{width}</p> */}
      {/* </div> */}
      {/* <div> */}
        <p className={styles.itemDescription}>
          {description.length > maxLength
            ? description.slice(0, maxLength - 1) + "..."
            : description}
        </p>
      {/* </div> */}
      <div className={styles.input}>
        <input className={styles.checkbox}
          onClick={(e) => e.stopPropagation()}
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