import { useState } from "react";
import api from "../services/api";
import "../App.css";

function Student() {
  const [student, setStudent] = useState({
    rollNumber: "",
    studentName: "",
    branch: "",
    year: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const saveStudent = async () => {
    try {
      const res = await api.post("/student/save", student);

      alert("Student Registered");

      console.log(res.data);

      setStudent({
        rollNumber: "",
        studentName: "",
        branch: "",
        year: ""
      });
    } catch (err) {
      alert("Error saving student");
      console.log(err);
    }
  };

  return (
    <div className="student-page">
      <div className="student-card">
        <h2>Register Student 🎓</h2>

        <input
          type="text"
          placeholder="Roll Number"
          name="rollNumber"
          value={student.rollNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Student Name"
          name="studentName"
          value={student.studentName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Branch"
          name="branch"
          value={student.branch}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Year"
          name="year"
          value={student.year}
          onChange={handleChange}
        />

        <button onClick={saveStudent}>
          Register Student
        </button>
      </div>
    </div>
  );
}

export default Student;