import React, { useContext } from "react";
import { TodoContext } from "../../context/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const data = useContext(TodoContext);

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoItems}>
        {data.todoItems &&
          data.todoItems.map(({title, description, status}, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                title={title}
                description={description}
                status={status}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
