import { useState } from "react";

function Marketplace() {

const [filterCountry,setFilterCountry] = useState("");
const [filterSkill,setFilterSkill] = useState("");

const projects = [
{
title:"React Website Development",
skills:"React, Node.js",
budget:"$1000",
country:"USA",
urgency:"High",
date:"2 days ago"
},

{
title:"Mobile App Development",
skills:"Flutter, Firebase",
budget:"$2000",
country:"India",
urgency:"Medium",
date:"5 days ago"
},

{
title:"Ecommerce Website",
skills:"MERN Stack",
budget:"$1500",
country:"UK",
urgency:"Low",
date:"1 day ago"
}
];

const filteredProjects = projects.filter((p)=>{

return(
(filterCountry === "" || p.country === filterCountry) &&
(filterSkill === "" || p.skills.toLowerCase().includes(filterSkill.toLowerCase()))
)

});

return(

<div className="marketplace">

<h1>Project Marketplace</h1>

{/* Filters */}

<div className="filters">

<select onChange={(e)=>setFilterCountry(e.target.value)}>

<option value="">All Countries</option>
<option value="USA">USA</option>
<option value="India">India</option>
<option value="UK">UK</option>

</select>

<input
type="text"
placeholder="Search Skill (React, MERN...)"
onChange={(e)=>setFilterSkill(e.target.value)}
/>

</div>


{/* Project Cards */}

<div className="projects">

{filteredProjects.map((project,index)=>(

<div className="project-card" key={index}>

<h3>{project.title}</h3>

<p><b>Skills:</b> {project.skills}</p>

<p><b>Budget:</b> {project.budget}</p>

<p><b>Country:</b> {project.country}</p>

<p><b>Urgency:</b> {project.urgency}</p>

<p><b>Posted:</b> {project.date}</p>

<div className="buttons">

<button className="details">View Details</button>

<button className="apply">Apply</button>

</div>

</div>

))}

</div>

</div>

)

}

export default Marketplace;