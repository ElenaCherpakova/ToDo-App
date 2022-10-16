import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();
const defaultTodos = [{ id: 1, task: 'Clean the room', completed: false }];

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(defaultTodos);

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}
