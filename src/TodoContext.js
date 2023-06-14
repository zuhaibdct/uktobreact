import React, { createContext, useState } from 'react';

// Create a new context object
export const TodoContext = createContext();

// Create a provider component to manage the state and provide it to the components
export const TodoProvider = ({ children }) => {
  // State to store the todo items
  const [items, setItems] = useState([]);

  // Function to add a new item to the todo list
  const addItem = (text) => {
    const newItem = { text, completed: false };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to delete an item from the todo list
  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  // Function to toggle the completion status of an item in the todo list
  const toggleComplete = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  // Render the context provider with the value containing the state and functions
  return (
    <TodoContext.Provider value={{ items, addItem, deleteItem, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};
