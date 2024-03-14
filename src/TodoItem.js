import React from 'react';

function TodoItem({ task, handleToggle, handleDelete }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggle(task.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
    </li>
  );
}

export default TodoItem;
