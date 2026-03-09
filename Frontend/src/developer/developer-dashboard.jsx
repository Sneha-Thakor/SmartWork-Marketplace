import React from "react";

function DeveloperDashboard() {
  return (
    <div className="main">

      <h1>Developer Dashboard</h1>

      <div className="card">
        <h3>Average Rating</h3>
        <p>4.7 ⭐</p>
      </div>

      <div className="card">
        <h3>On-Time Delivery</h3>
        <p>92%</p>
      </div>

      <div className="card">
        <h3>Total Earnings</h3>
        <p>$12,500</p>
      </div>

    </div>
  );
}

export default DeveloperDashboard;