import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const trimmed = newTask.trim();
    if (trimmed === "") return;

    setTasks([...tasks, trimmed]);
    setNewTask("");
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add Task
        </button>
        <button onClick={clearTasks} style={styles.buttonClear}>
          Clear All
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.length === 0 ? (
          <p style={styles.emptyMessage}>No tasks available.</p>
        ) : (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  buttonClear: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  emptyMessage: {
    color: "#777",
  },
};

export default App;
