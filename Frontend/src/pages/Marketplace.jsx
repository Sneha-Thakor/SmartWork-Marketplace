import { useState } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Marketplace(){

const [country,setCountry] = useState("")
const [skill,setSkill] = useState("")

const filtered = projects.filter(p =>

(country === "" || p.country === country) &&
(skill === "" || p.skills.toLowerCase().includes(skill.toLowerCase()))

)

return(

<div className="marketplace">

<h1>Project Marketplace</h1>

<div className="filters">

<select onChange={(e)=>setCountry(e.target.value)}>
<option value="">All Countries</option>
<option>USA</option>
<option>India</option>
<option>UK</option>
</select>

<input
placeholder="Search Skills"
onChange={(e)=>setSkill(e.target.value)}
/>

</div>

<div className="projects">

{filtered.map(p => (

<div className="project-card" key={p.id}>

<h3>{p.title}</h3>

<p><b>Skills:</b> {p.skills}</p>
<p><b>Budget:</b> {p.budget}</p>
<p><b>Country:</b> {p.country}</p>
<p><b>Urgency:</b> {p.urgency}</p>
<p><b>Posted:</b> {p.date}</p>

<Link to={`/project/${p.id}`}>
<button>View Details</button>
</Link>

</div>

))}

</div>

</div>

)

}

export default Marketplace