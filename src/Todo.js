import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          id={id}
          editTodo={editTodo}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton arial-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton arial-label='Edit'>
              <EditIcon onClick={toggle} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
