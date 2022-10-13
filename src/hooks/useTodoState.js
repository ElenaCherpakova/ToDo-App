import useLocalStorageState from './useLocalStorageState';
import uuid from 'react-uuid';

function useTodoState (initialTodos) {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
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
    },
  };
};

export default useTodoState;