import React, { useContext } from 'react';
import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodosContext);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleNewTodoSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
};
export default TodoForm;
