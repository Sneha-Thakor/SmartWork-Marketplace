import React from "react";
import Navbar from "../components/Navbar";
import KPIBox from "../components/KPIBox";
import projects from "../data/projects";
import developers from "../data/developers";

function AdminDashboard() {

  const totalProjects = projects.length;
  const totalDevelopers = developers.length;

  return (
    <div>
      <Navbar />

      <h1>Admin Dashboard</h1>

      <div className="kpi-container">
        <KPIBox title="Total Projects" value={totalProjects} />
        <KPIBox title="Active Developers" value={totalDevelopers} />
        <KPIBox title="Top Skill" value="React" />
        <KPIBox title="Avg Rating" value="4.6" />
      </div>

      <div className="charts">
        <h2>Analytics Overview</h2>

        <p>Projects by Country</p>
        <p>Projects by Skills</p>
        <p>Developer Performance</p>
      </div>
    </div>
  );
}

export default AdminDashboard;