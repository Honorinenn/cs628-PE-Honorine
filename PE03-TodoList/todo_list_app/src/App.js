// App.js
import React, { useState } from "react";
import TodoList from "./TodoList";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>ToDo List App</h2>
      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input-box"
      />
      <button onClick={addTask} className="add-btn">
        Add Task
      </button>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;