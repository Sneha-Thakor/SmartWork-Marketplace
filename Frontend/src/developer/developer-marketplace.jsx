import React from "react";

function DeveloperMarketplace() {

  const projects = [
    { id: 1, title: "E-commerce Website", skill: "React" },
    { id: 2, title: "Mobile App UI", skill: "Flutter" },
  ];

  return (

    <div className="main">

      <h1>Project Marketplace</h1>

      <input type="text" placeholder="Search by skill" />

      <select>
        <option>All Categories</option>
        <option>Web Development</option>
        <option>Mobile App</option>
      </select>

      {projects.map((project) => (

        <div key={project.id} className="project">

          <h3>{project.title}</h3>

          <p>Required Skill: {project.skill}</p>

          <button>View Details</button>

        </div>

      ))}

    </div>

  );
}

export default DeveloperMarketplace;