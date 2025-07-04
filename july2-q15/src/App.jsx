// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const FIREBASE_URL = "https://users-db-22472-default-rtdb.asia-southeast1.firebasedatabase.app/users";

function App() {
  const [users, setUsers] = useState({});
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  // Fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(`${FIREBASE_URL}.json`);
    setUsers(res.data || {});
  };

  const validate = () => {
    let temp = {};
    temp.name = form.name ? "" : "Name is required.";
    temp.email = /^\S+@\S+\.\S+$/.test(form.email)
      ? ""
      : "Email is invalid.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editId) {
      // PATCH update
      await axios.patch(`${FIREBASE_URL}/${editId}.json`, form);
      setEditId(null);
    } else {
      // POST create
      await axios.post(`${FIREBASE_URL}.json`, form);
    }
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  const handleEdit = (id) => {
    setEditId(id);
    setForm(users[id]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${FIREBASE_URL}/${id}.json`);
    fetchUsers();
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "1rem" }}>
      <h2>User Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.name}</div>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.email}</div>

        <button type="submit">{editId ? "Update" : "Add"} User</button>
      </form>

      <hr />

      <h3>All Users</h3>
      <ul>
        {Object.entries(users).map(([id, user]) => (
          <li key={id}>
            {user.name} ({user.email}){" "}
            <button onClick={() => handleEdit(id)}>Edit</button>{" "}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
