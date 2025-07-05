import React, { useEffect, useState } from "react";

// ✅ Reusable UserCard component
function UserCard({ user }) {
  return (
    <div style={styles.card}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

// ✅ Main App component
function UserApp() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Filter users when searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      {loading && <p>Loading users...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.cardGrid}>
        {!loading &&
          !error &&
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default UserApp;

// ✅ Inline styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh"
  },
  input: {
    padding: "10px",
    margin: "20px 0",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "left"
  },
  error: {
    color: "red",
    marginTop: "10px"
  }
};
