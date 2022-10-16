import React, { createContext } from 'react';
// import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [{ id: 1, task: 'Clean the room', completed: false }];

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos', //key in ths storage
    defaultTodos, //default value
    todoReducer, // function
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
