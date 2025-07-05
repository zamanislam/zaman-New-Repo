import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function BottomMainRight() {
  const username = useContext(UserContext);

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <strong>BottomMainRight:</strong> Hello, {username || "stranger"}!
    </div>
  );
}

export default BottomMainRight;
