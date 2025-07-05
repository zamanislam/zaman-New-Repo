import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NestedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === "light" ? "#eee" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={boxStyle}>
      <h3>This box adapts to the <em>{theme}</em> theme 🌈</h3>
    </div>
  );
}

export default NestedBox;
