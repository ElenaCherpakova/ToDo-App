import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo key={todo.id} task={todo.task} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
