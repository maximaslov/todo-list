import React, { useContext } from "react";
import styles from "./App.module.css";
import { TodoContext } from "./context/Context";
import NewTodoButton from "./ui/NewTotdoButton/NewTotdoButton";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCard from "./components/TodoList/TodoItem/TodoCard";
import Error from './components/Error/Error'

function App() {
  const data = useContext(TodoContext);

  return (
    <main className={styles.appWrapper}>
      {data.errorMessage && <Error />}
      <NewTodoButton />
      {data.showNewTodoForm && <NewTodoForm />}
      <TodoList />
      {data.showTodoCardContainer && <TodoCard />}
    </main>
  );
}

export default App;