import React from "react";

function EditDeveloperProfile() {

  return (
    <div style={{ padding: "40px" }}>
      <h1>Edit Developer Profile</h1>

      <form>

        <div>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Skills</label>
          <br />
          <input type="text" placeholder="React, Node, Python..." />
        </div>

        <br />

        <div>
          <label>Experience</label>
          <br />
          <input type="number" placeholder="Years of experience" />
        </div>

        <br />

        <button type="submit">Update Profile</button>

      </form>
    </div>
  );

}

export default EditDeveloperProfile;