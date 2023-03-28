import React, { useContext } from "react";
import { TodosContext } from "../../context/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const data = useContext(TodosContext);

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoItemHeader}>
        <p>ID</p>
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>STATUS</p>
      </div>
      {data.todos &&
        data.todos.map((e, i) => {
          return (
            <TodoItem
              key={i}
              id={i + 1}
              title={e.title}
              description={e.description}
              status={e.status}
            />
          );
        })}
    </div>
  );
};

export default TodoList;