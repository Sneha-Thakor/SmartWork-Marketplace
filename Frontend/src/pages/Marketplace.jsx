import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import FilterPanel from "../components/FilterPanel";
import projects from "../data/projects";

function Marketplace() {
  return (
    <div>
      <Navbar />

      <h1>Project Marketplace</h1>

      <FilterPanel />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;