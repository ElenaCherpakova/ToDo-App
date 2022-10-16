import React, { createContext, useReducer } from 'react';
// import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';

export const TodosContext = createContext();
const defaultTodos = [{ id: 1, task: 'Clean the room', completed: false }];

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider
      value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
