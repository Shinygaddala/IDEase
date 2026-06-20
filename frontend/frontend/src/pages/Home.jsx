import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to <span>IDEase 🎓</span></h1>
        <p>Smart Digital Permission Slip System for Students & Institutions</p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/student")}>
            Student Registration
          </button>

          <button onClick={() => navigate("/permission")} className="secondary">
            Generate Permission Slip
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="card">
          <h3>🧑‍🎓 Student Registration</h3>
          <p>Register students with roll number, branch, and details.</p>
        </div>

        <div className="card">
          <h3>📄 Permission Slip</h3>
          <p>Generate digital slips with time-based validation.</p>
        </div>

        <div className="card">
          <h3>⏱️ Smart Validation</h3>
          <p>Auto expiry system ensures security and control.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;