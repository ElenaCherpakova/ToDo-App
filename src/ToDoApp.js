import React, { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'react-uuid';

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
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTodo } : todo,
    );
    setTodos(updatedTodos);
  };
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
      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={5}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoApp;
