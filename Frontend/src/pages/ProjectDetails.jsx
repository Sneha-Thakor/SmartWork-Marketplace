import { useParams, Link } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails(){

const { id } = useParams()

const project = projects.find(p => p.id == id)

return(

<div className="container">

<h1>{project.title}</h1>

<p><b>Description:</b> {project.description}</p>
<p><b>Skills:</b> {project.skills}</p>
<p><b>Budget:</b> {project.budget}</p>
<p><b>Country:</b> {project.country}</p>
<p><b>Urgency:</b> {project.urgency}</p>

<p><b>Client Rating:</b> ⭐ 4.5</p>
<p><b>Matching Score:</b> 82%</p>

<Link to={`/apply/${project.id}`}>
<button>Apply to Project</button>
</Link>

</div>

)

 }

export default ProjectDetails