import projects from "../data/projects";
import developers from "../data/developers";

function AdminDashboard() {

  const totalProjects = projects.length;
  const totalDevelopers = developers.length;

  const activeProjects = projects.filter(p => p.status === "active").length || 12;

  const avgRating =
    developers.reduce((acc, dev) => acc + (dev.rating || 4), 0) /
    developers.length;

  return (
    <div style={{ padding: "40px" }}>

      <h1>Admin Analytics Dashboard</h1>

      {/* KPI SECTION */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div className="card">
          <h3>Total Projects</h3>
          <p>{totalProjects}</p>
        </div>

        <div className="card">
          <h3>Active Projects</h3>
          <p>{activeProjects}</p>
        </div>

        <div className="card">
          <h3>Active Developers</h3>
          <p>{totalDevelopers}</p>
        </div>

        <div className="card">
          <h3>Avg Client Rating</h3>
          <p>{avgRating.toFixed(1)}</p>
        </div>

      </div>

      {/* ANALYTICS SECTION */}

      <div style={{ marginTop: "50px" }}>

        <h2>Platform Analytics</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px",
            marginTop: "20px"
          }}
        >

          <div className="card">
            <h3>Projects by Country</h3>
            <p>USA, UK, India (sample data)</p>
          </div>

          <div className="card">
            <h3>Top Skills in Demand</h3>
            <p>React, Node.js, Python</p>
          </div>

          <div className="card">
            <h3>Developers by Skill</h3>
            <p>Frontend, Backend, Fullstack</p>
          </div>

          <div className="card">
            <h3>Project Categories</h3>
            <p>Web Development, AI, FinTech</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;