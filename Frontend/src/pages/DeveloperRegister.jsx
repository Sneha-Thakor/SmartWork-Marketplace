import React from "react";

const DeveloperRegister = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Developer Register</h1>

      <form>
        <input type="text" placeholder="Full Name" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <input type="password" placeholder="Password" />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DeveloperRegister;