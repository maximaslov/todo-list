import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

const Context = (props) => {
  const [language, setLanguage] = useState("en");
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
  const [todoItems, setTodoItems] = useState(() => {
    const todoData = todoStorage.getItem("storageTodoList");
    return todoData ? JSON.parse(todoData) : [];
  });

  const updateTodoItems = (todo) => {
    todoStorage.setItem("storageTodoList", JSON.stringify(todo));
    setTodoItems(todo);
  };

  const openTodoCard = () => {
    hideNewTodoButton();
    setShowTodoCardContainer(true);
    setShowTodoCard(true);
  };

  const showNewTodoButton = () => {
    setShowNewTodoItemBtn(true);
    setHideAddButton(false);
  };

  const hideNewTodoButton = () => {
    setShowNewTodoItemBtn(false);
    setTimeout(() => {
      setHideAddButton(true);
    }, 300);
  };

  const closeForm = () => {
    showNewTodoButton();
    setShowTodoFormBox(false);
    setTimeout(() => {
      setShowTodoForm(false);
    }, 300);
  };

  const onFormSubmit = (newTodoList) => {
    updateTodoItems(newTodoList);
    closeForm();
  };

  const showForm = () => {
    setShowTodoForm(true);
    setShowTodoFormBox(true);
  };

  const closeTodoCard = () => {
    setShowTodoCard(false);
    setShowTodoFormBox(false);
    showNewTodoButton();
    setTimeout(() => {
      setShowTodoCardContainer(false);
    }, 300);
  };

  const showError = (err) => {
    setErrorMessage(err.message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 2900);
  };

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
    todoItems,
    updateTodoItems,
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
    maxLength,
    language,
    setLanguage,
  };

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Context;
