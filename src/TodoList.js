import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, handleToggle, handleDelete }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
