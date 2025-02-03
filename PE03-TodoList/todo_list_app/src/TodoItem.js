// TodoItem.js
import React from "react";

const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="task-item">
      <span>{task}</span>
      <button onClick={deleteTask} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;