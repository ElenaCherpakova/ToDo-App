import React from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

const EditTodoForm = ({ id, editTodo, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '80%' }}>
      <TextField
        margin='normal'
        onChange={handleChange}
        value={value}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
