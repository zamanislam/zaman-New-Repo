import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask(""); // Clear input
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Delete correct task
  };

  const handleToggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        placeholder="Enter a task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App
