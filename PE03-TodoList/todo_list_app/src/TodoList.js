// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default TodoList;
