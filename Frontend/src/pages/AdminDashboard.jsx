function AdminDashboard() {
  return (
    <div style={{padding:"40px"}}>

      <h1>Admin Dashboard</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div className="card">
          <h3>Total Clients</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Total Developers</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Active Projects</h3>
          <p>34</p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;