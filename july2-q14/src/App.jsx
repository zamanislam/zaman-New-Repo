import React from "react";
import axios from "axios";
import './App.css'

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://tasks-db-a2928-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
      );

      const data = response.data;

      if (data) {
        // Convert object to array and include the Firebase keys as 'id'
        const taskArray = Object.entries(data).map(([id, task]) => ({
          id,
          ...task,
        }));
        setTasks(taskArray);
      } else {
        setTasks([]); // No data available
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks. Please try again later.");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        
        ))}
      </ul>
    </div>
  );
}

export default App
