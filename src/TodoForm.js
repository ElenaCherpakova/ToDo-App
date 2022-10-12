import React from 'react';
import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleNewTodoSubmit}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
};
export default TodoForm;
