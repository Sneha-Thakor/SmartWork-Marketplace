import { useState } from "react";

export default function PostProject() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    category: "",
    budgetMin: "",
    budgetMax: "",
    urgency: "",
    duration: "",
    country: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Submitted:", formData);

    // later connect API
    // fetch("/api/projects", {method:"POST"})
  };

  return (
    <div className="post-container">

      <h2>Post a New Project</h2>

      <form onSubmit={handleSubmit} className="project-form">

        <label>Project Title</label>
        <input
          type="text"
          name="title"
          placeholder="AI Chatbot Development"
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Describe your project requirements"
          onChange={handleChange}
        />

        <label>Required Skills</label>
        <input
          type="text"
          name="skills"
          placeholder="React, Node.js, Python"
          onChange={handleChange}
        />

        <label>Project Category</label>
        <select name="category" onChange={handleChange}>
          <option>Web Development</option>
          <option>AI / ML</option>
          <option>Mobile App</option>
          <option>Data Science</option>
        </select>

        <label>Budget Range (USD)</label>
        <div className="budget">
          <input
            type="number"
            name="budgetMin"
            placeholder="Min"
            onChange={handleChange}
          />
          <input
            type="number"
            name="budgetMax"
            placeholder="Max"
            onChange={handleChange}
          />
        </div>

        <label>Urgency Level</label>
        <select name="urgency" onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Expected Duration</label>
        <input
          type="text"
          name="duration"
          placeholder="2 weeks"
          onChange={handleChange}
        />

        <label>Country / Time Zone</label>
        <input
          type="text"
          name="country"
          placeholder="USA / UK / India"
          onChange={handleChange}
        />

        <label>Preferred Experience</label>
        <input
          type="number"
          name="experience"
          placeholder="3+ years"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Post Project
        </button>

      </form>
    </div>
  );
}