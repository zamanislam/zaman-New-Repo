import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

export default Navbar;
