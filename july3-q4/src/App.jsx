import React, { useState, useEffect, useRef } from "react";

function StopwatchApp() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(10);
  const [triggered, setTriggered] = useState(false);
  const intervalRef = useRef(null);

  // Sound to play at target (or fallback to console)
  const soundUrl = "https://www.soundjay.com/button/beep-07.mp3";
  const audio = useRef(new Audio(soundUrl));

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount or when running changes
    return () => clearInterval(intervalRef.current);
  }, [running]);

  // Trigger sound at target time
  useEffect(() => {
    if (seconds === Number(target) && !triggered) {
      try {
        audio.current.play();
      } catch (err) {
        console.log("Sound triggered at", target, "seconds.");
      }
      setTriggered(true); // prevent repeated plays
    }
  }, [seconds, target, triggered]);

  const handleStart = () => {
    setRunning(true);
    setTriggered(false); // reset trigger when restarted
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
    setTriggered(false);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
    setTriggered(false);
  };

  return (
    <div style={styles.container}>
      <h1>⏱️ React Stopwatch</h1>

      <div style={styles.timeDisplay}>{seconds} sec</div>

      <input
        type="number"
        min="1"
        value={target}
        onChange={handleTargetChange}
        style={styles.input}
      />
      <p>Sound will play at: <strong>{target} seconds</strong></p>

      <div style={styles.buttons}>
        <button onClick={handleStart} disabled={running} style={styles.button}>
          Start
        </button>
        <button onClick={handleStop} disabled={!running} style={styles.button}>
          Stop
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopwatchApp;

// ✅ Basic styling
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    padding: "30px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  timeDisplay: {
    fontSize: "3rem",
    margin: "20px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "#fff",
  },
  input: {
    fontSize: "1rem",
    padding: "5px 10px",
    width: "80px",
    marginTop: "10px",
  },
};
