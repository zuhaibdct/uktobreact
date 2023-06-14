import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StringRepeater from './StringRepeater';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <Router>
      {/* Sidebar */}
      <Drawer variant="permanent" sx={{ width: 240 }}>
        <Toolbar />
        <List>
          {/* Sidebar Item: String Repeater */}
          <ListItem button component={Link} to="/" sx={{ '&.active': { backgroundColor: '#f5f5f5' } }}>
            <ListItemIcon>
              <span role="img" aria-label="String Repeater">
                <RepeatIcon />
              </span>
            </ListItemIcon>
            <ListItemText primary="String Repeater" />
          </ListItem>
          {/* Sidebar Item: To-Do List */}
          <ListItem button component={Link} to="/todo" sx={{ '&.active': { backgroundColor: '#f5f5f5' } }}>
            <ListItemIcon>
              <span role="img" aria-label="To-Do List">
                <ChecklistIcon />
              </span>
            </ListItemIcon>
            <ListItemText primary="To-Do List" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <main>
        {/* Wrap the Routes with the TodoProvider */}
        <TodoProvider>
          <Routes>
            {/* Route: String Repeater */}
            <Route path="/" element={<StringRepeater />} />
            {/* Route: To-Do List */}
            <Route path="/todo" element={<TodoList />} />
          </Routes>
        </TodoProvider>
      </main>
    </Router>
  );
};

export default App;
