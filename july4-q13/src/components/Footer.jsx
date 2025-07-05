import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ padding: "10px", backgroundColor: "#ddd" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
}

export default Footer;
