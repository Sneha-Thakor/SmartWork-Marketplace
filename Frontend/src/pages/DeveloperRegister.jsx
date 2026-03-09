import React from "react";

function DeveloperRegister() {

  return (

    <div className="register-container">

      <h1>Join as Developer</h1>
      <p>Create your developer profile and start applying to global projects.</p>

      <form className="register-form">

        <input type="text" placeholder="Full Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="password" placeholder="Password" required />

        <input type="text" placeholder="Country / Location" />

        <input type="text" placeholder="Primary Skill (React, Python etc)" />

        <input type="text" placeholder="Secondary Skills" />

        <input type="number" placeholder="Experience (Years)" />

        <textarea placeholder="Short Bio"></textarea>

        <input type="text" placeholder="Portfolio Link (Optional)" />

        <button type="submit">Create Developer Profile</button>

      </form>

    </div>

  );
}

export default DeveloperRegister;