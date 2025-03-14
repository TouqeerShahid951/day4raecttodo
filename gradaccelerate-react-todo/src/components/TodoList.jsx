import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) { // Accept todos as a prop
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
      )}
    </div>
  );
}

export default TodoList;
