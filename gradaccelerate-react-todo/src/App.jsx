import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
