import React, { useContext, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from '@mui/material';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  // Accessing the todo items and relevant functions from the context
  const { items, addItem, deleteItem, toggleComplete } = useContext(TodoContext);
  
  // State variables for input value and error message
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  // Event handler for adding a new item
  const handleAddItem = (event) => {
    event.preventDefault();
    
    // Validating the input value
    if (inputValue.trim() === '') {
      setError('Please enter a valid item');
      return;
    }

    // Adding the item to the list
    addItem(inputValue.trim());
    setInputValue('');
  };

  // Event handler for deleting an item
  const handleDeleteItem = (index) => {
    deleteItem(index);
  };

  // Event handler for toggling item completion
  const handleToggleComplete = (index) => {
    toggleComplete(index);
  };

  return (
    <div style={{ marginLeft: 240, padding: '24px' }}>
      <form onSubmit={handleAddItem}>
        {/* Input field for adding new items */}
        <TextField
          name="item"
          label="Add Item"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          error={!!error}
          helperText={error}
        />
        {/* Button to add the item */}
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
      {/* List to display the items */}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            dense
            button
            onClick={() => handleToggleComplete(index)}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {/* Checkbox to indicate item completion */}
            <Checkbox checked={item.completed} />
            {/* Text of the item */}
            <ListItemText primary={item.text} style={{ overflowWrap: 'break-word', width: 'calc(100% - 64px)' }}/>
            {/* Button to delete the item */}
            <ListItemSecondaryAction>
              <Button variant="contained" color="secondary" onClick={() => handleDeleteItem(index)}>
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
