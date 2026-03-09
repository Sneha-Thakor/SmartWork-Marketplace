import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <h1>Global Service Marketplace</h1>
        <p>
          A global platform where clients post projects and developers
          collaborate to deliver technology solutions.
        </p>

        <div className="hero-buttons">
          <button>Post a Project</button>
          <button>Join as Developer</button>
        </div>
      </div>

      <div className="features">
        <h2>Platform Features</h2>

        <div className="feature-box">
          <h3>Project Marketplace</h3>
          <p>Browse global technology projects and apply instantly.</p>
        </div>

        <div className="feature-box">
          <h3>Smart Matching</h3>
          <p>Our engine recommends the best developers for each project.</p>
        </div>

        <div className="feature-box">
          <h3>Analytics Dashboard</h3>
          <p>Admins can monitor demand, skills, and performance metrics.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;