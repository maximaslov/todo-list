import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const Context = (props) => {
  const [showNewTodoItemBtn, setShowNewTodoItemBtn] = useState(true);
  const [showNewTodoForm, setShowTodoForm] = useState(false);
  const [showTodoCardContainer, setShowTodoCardContainer] = useState(false);
  const [showTodoCard, setShowTodoCard] = useState(false);
  const [showTodoFormBox, setShowTodoFormBox] = useState(false);
  const [hideAddButton, setHideAddButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [maxLength, setMaxLength] = useState(16);
  const [todoCardData, setTodoCardData] = useState({
    title: null,
    description: null,
    id: null,
    isDone: false,
  });

  const todoStorage = window.localStorage;
  const [todos, setTodos] = useState(() => {
    const todoData = todoStorage.getItem("storageTodoList");
    return todoData ? JSON.parse(todoData) : [];
  });
   
  const updateTodos = (todo) => {
    todoStorage.setItem("storageTodoList", JSON.stringify(todo));
    setTodos(todo)
  }

  const openTodoCard = () => {
    hideNewTodoButton();
    setShowTodoCardContainer(true);
    setShowTodoCard(true);
  }
  
  const showNewTodoButton = () => {
    setShowNewTodoItemBtn(true);
    setHideAddButton(false);
  }

  const hideNewTodoButton = () => {
    setShowNewTodoItemBtn(false);
    setTimeout(() => {
      setHideAddButton(true)
    }, 700);
  }

  const closeForm = () => {
    showNewTodoButton()
    setShowTodoFormBox(false);
    setTimeout(() => {
      setShowTodoForm(false);
    }, 700);
  }

  const onFormSubmit = (newTodoList) => {
    updateTodos(newTodoList);
    closeForm();
  }

  const showForm = () => {
    setShowTodoForm(true);
    setShowTodoFormBox(true);
  }

  const closeTodoCard = () => {
    setShowTodoCard(false);
    setShowTodoFormBox(false);
    showNewTodoButton();
    setTimeout(() => {
      setShowTodoCardContainer(false);
    }, 700);
  }

  const showError = (err) => {
    setErrorMessage(err.message);
    setTimeout(() => {
      setErrorMessage(null)
    }, 2900);
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 600) {
      setMaxLength(6);
    } else {
      setMaxLength(16);
    }
  }, [width]);

  const value = {
    showNewTodoItemBtn,
    setShowNewTodoItemBtn,
    showNewTodoForm,
    setShowTodoForm,
    todos,
    updateTodos,
    todoStorage,
    showTodoCard,
    setShowTodoCard,
    todoCardData,
    setTodoCardData,
    hideAddButton,
    setHideAddButton,
    showTodoFormBox,
    setShowTodoFormBox,
    showTodoCardContainer,
    setShowTodoCardContainer,
    onFormSubmit,
    closeForm,
    hideNewTodoButton,
    showNewTodoButton,
    showForm,
    openTodoCard,
    closeTodoCard,
    errorMessage, 
    setErrorMessage,
    showError,
    maxLength
  };

  return (
    <TodosContext.Provider value={value}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default Context;