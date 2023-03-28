import React, { useContext } from "react";
import styles from "./App.module.css";
import { TodosContext } from "./context/Context";
import NewTodoButton from "./components/NewTotdoButton/NewTotdoButton";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCard from "./components/TodoList/TodoItem/TodoCard";

function App() {
  const data = useContext(TodosContext);

  return (
    <main className={styles.appWrapper}>
      <NewTodoButton />
      {data.showNewTodoForm && <NewTodoForm />}
      <TodoList />
      {data.showTodoCardContainer && <TodoCard />}
    </main>
  );
}

export default App;