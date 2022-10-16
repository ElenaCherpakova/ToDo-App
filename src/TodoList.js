import React, { useContext, Fragment } from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';
import { TodosContext } from './contexts/todos.context';
const TodoList = () => {
  const todos = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo {...todo} />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
