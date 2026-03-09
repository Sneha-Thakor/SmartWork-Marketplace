import { useParams } from "react-router-dom"

function ProjectDetails(){

const {id} = useParams()

/* Example Project Data */

const project = {
title:"Mobile App Development",
description:"We need a cross platform mobile application for ecommerce platform with payment integration and push notifications.",
skills:["React Native","Firebase","Stripe"],
budget:"$2000 - $4000",
country:"USA",
urgency:"High",
duration:"30 Days",
clientRating:"4.8",
matchingScore:"86%",
portfolio:"https://example-portfolio.com",
website:"https://example-project.com",
mobileApp:"Android + iOS"
}

return(

<div className="project-details-container">

<h1 className="project-title-big">{project.title}</h1>

<div className="project-info-box">

<p className="project-meta"><b>Description:</b> {project.description}</p>

<p className="project-meta"><b>Required Skills:</b> {project.skills.join(", ")}</p>

<p className="project-meta"><b>Budget:</b> {project.budget}</p>

<p className="project-meta"><b>Country:</b> {project.country}</p>

<p className="project-meta"><b>Urgency:</b> {project.urgency}</p>

<p className="project-meta"><b>Duration:</b> {project.duration}</p>

<p className="project-meta"><b>Client Rating:</b> ⭐ {project.clientRating}</p>

<p className="project-meta"><b>Matching Score:</b> {project.matchingScore}</p>

{/* Mobile App Section */}

<div className="project-section">

<h3>Mobile App</h3>

<p>{project.mobileApp}</p>

</div>

{/* Website Section */}

<div className="project-section">

<h3>Website</h3>

<a href={project.website} target="_blank">
Visit Website
</a>

</div>

{/* Portfolio Section */}

<div className="project-section">

<h3>Portfolio</h3>

<a href={project.portfolio} target="_blank">
View Portfolio
</a>

</div>

<button className="apply-btn">
Apply for Project
</button>

</div>

</div>

)

}

export default ProjectDetails 