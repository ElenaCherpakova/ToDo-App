import React, { Fragment } from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo
                // {id={todo.id}
                // task={todo.task}
                // completed={todo.completed}}
                {...todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                toggleTodo={toggleTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
