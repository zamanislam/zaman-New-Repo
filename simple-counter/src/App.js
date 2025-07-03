
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      {count === 10 && <p style={styles.goal}>Goal Reached!</p>}

      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
        <button onClick={reset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  goal: {
    color: "green",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default App;
