import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <Navbar />

      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <p><b>Skills:</b> {project.skills.join(", ")}</p>

      <p><b>Budget:</b> ${project.budget}</p>

      <p><b>Country:</b> {project.country}</p>

      <p><b>Urgency:</b> {project.urgency}</p>

      <button>Apply for Project</button>
    </div>
  );
}

export default ProjectDetails;