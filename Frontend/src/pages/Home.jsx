function Home() {
  return (
    <div style={{padding:"60px"}}>

      <h1>Global Service Marketplace</h1>

      <p style={{maxWidth:"600px"}}>
      Connect with top developers worldwide and build amazing technology
      products faster.
      </p>

      <div style={{marginTop:"20px"}}>

        <button style={{
          padding:"12px 20px",
          marginRight:"10px",
          background:"#2563eb",
          color:"white",
          border:"none"
        }}>
          Post a Project
        </button>

        <button style={{
          padding:"12px 20px",
          background:"#16a34a",
          color:"white",
          border:"none"
        }}>
          Join as Developer
        </button>

      </div>

    </div>
  );
}

export default Home;