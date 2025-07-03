import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: true },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: true },
  { id: 4, name: "David", present: false },
  { id: 5, name: "Eva", present: true },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("All");

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const getFilteredStudents = () => {
    if (filter === "Present") {
      return students.filter((s) => s.present);
    } else if (filter === "Absent") {
      return students.filter((s) => !s.present);
    }
    return students;
  };

  const totalPresent = students.filter((s) => s.present).length;

  return (
    <div style={styles.container}>
      <h1>Attendance Manager</h1>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {getFilteredStudents().map((student) => (
          <li
            key={student.id}
            style={{
              ...styles.studentItem,
              backgroundColor: student.present ? "#d4edda" : "#f8d7da",
              color: student.present ? "#155724" : "#721c24",
            }}
          >
            <span>
              {student.name} - {student.present ? "Present" : "Absent"}
            </span>
            <button
              onClick={() => toggleAttendance(student.id)}
              style={styles.toggleBtn}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {totalPresent}</h3>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial",
    textAlign: "center",
  },
  studentItem: {
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleBtn: {
    padding: "6px 12px",
    fontSize: "14px",
    cursor: "pointer",
  },
  select: {
    padding: "5px 10px",
    fontSize: "16px",
  },
};

export default App;
