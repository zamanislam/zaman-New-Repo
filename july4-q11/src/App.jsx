import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import Main from "./components/Main";

function App() {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={username}>
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>Context API Example</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px" }}
        />

        <Main />
      </div>
    </UserContext.Provider>
  );
}

export default App;
