import { useState } from "react";
import projectsData from "../data/projects";

function AdminProjects(){

const [projects,setProjects] = useState(projectsData)

const [form,setForm] = useState({
title:"",
skills:"",
budget:"",
country:""
})

const [editIndex,setEditIndex] = useState(null)


function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()

const newProject = {
...form,
skills:form.skills.split(",")
}

if(editIndex !== null){

const updated = [...projects]
updated[editIndex] = newProject
setProjects(updated)
setEditIndex(null)

}else{

setProjects([...projects,newProject])

}

setForm({
title:"",
skills:"",
budget:"",
country:""
})

}

function handleEdit(index){

const project = projects[index]

setForm({
title:project.title,
skills:project.skills.join(","),
budget:project.budget,
country:project.country
})

setEditIndex(index)

}

function handleDelete(index){

const updated = projects.filter((_,i)=>i!==index)
setProjects(updated)

}

return(

<div className="admin-page">

<h1>Admin - Projects List</h1>


<form onSubmit={handleSubmit} className="admin-form">

<input
name="title"
placeholder="Project Title"
value={form.title}
onChange={handleChange}
/>

<input
name="skills"
placeholder="Skills (React,Node)"
value={form.skills}
onChange={handleChange}
/>

<input
name="budget"
placeholder="Budget"
value={form.budget}
onChange={handleChange}
/>

<input
name="country"
placeholder="Country"
value={form.country}
onChange={handleChange}
/>

<button type="submit">

{editIndex !== null ? "Update Project" : "Add Project"}

</button>

</form>



<table className="admin-table">

<thead>

<tr>
<th>Project Title</th>
<th>Skills</th>
<th>Budget</th>
<th>Country</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{projects.map((p,i)=>(

<tr key={i}>

<td>{p.title}</td>

<td>{p.skills.join(", ")}</td>

<td>${p.budget}</td>

<td>{p.country}</td>

<td>

<button onClick={()=>handleEdit(i)}>Edit</button>

<button
onClick={()=>handleDelete(i)}
style={{marginLeft:"8px",background:"#ef4444"}}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default AdminProjects