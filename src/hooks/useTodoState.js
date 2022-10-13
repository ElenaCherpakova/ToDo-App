import React, {useState} from "react";
import uuid from 'react-uuid';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
return {
  todos,
  addTodo: (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  },
  removeTodo: (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  },
  toggleTodo: (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  },
  editTodo: (todoId, newTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTodo } : todo,
    );
    setTodos(updatedTodos);
  }
};
};