import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';
const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const { editTodo } = useContext(TodosContext);
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
