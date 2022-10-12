import React, { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';

const ToDoApp = () => {
  const initialTodos = [
    {
      id: 1,
      task: 'Wash car',
      completed: false,
    },
    {
      id: 2,
      task: 'Wash dog',
      completed: true,
    },
    {
      id: 3,
      task: 'Make dinner',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}>
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};

export default ToDoApp;
