import React, { useState, useEffect } from "react";

// ✅ Reusable ThemedBox component
function ThemedBox({ theme, children }) {
  const styles = {
    padding: "20px",
    margin: "10px 0",
    borderRadius: "8px",
    textAlign: "center",
    transition: "0.3s",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  };

  return <div style={styles}>{children}</div>;
}

// ✅ Main ThemeApp Component
function ThemeApp() {
  // Load theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const appStyle = {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: theme === "dark" ? "#222" : "#f9f9f9",
    transition: "0.3s",
  };

  return (
    <div style={appStyle}>
      <h1 style={{ color: theme === "dark" ? "#fff" : "#000" }}>Theme Toggle App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {/* Render 3 themed boxes */}
      <ThemedBox theme={theme}>Box 1 Content</ThemedBox>
      <ThemedBox theme={theme}>Box 2 Content</ThemedBox>
      <ThemedBox theme={theme}>Box 3 Content</ThemedBox>
    </div>
  );
}

export default ThemeApp;
