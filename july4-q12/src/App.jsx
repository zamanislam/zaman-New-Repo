import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import NestedBox from "./components/NestedBox";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial",
    transition: "0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>🌗 Theme Toggle with Context API</h1>
      <button onClick={toggleTheme} style={{ padding: "10px 20px" }}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <NestedBox />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
