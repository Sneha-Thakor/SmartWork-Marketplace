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

if(editIndex !== null){

const updated=[...projects]
updated[editIndex]=form
setProjects(updated)
setEditIndex(null)

}else{

setProjects([...projects,form])

}

setForm({
title:"",
skills:"",
budget:"",
country:""
})

}

function handleEdit(index){
setForm(projects[index])
setEditIndex(index)
}

function handleDelete(index){
const updated=projects.filter((_,i)=>i!==index)
setProjects(updated)
}

return(

<div className="admin-page">

<h1>Admin - Projects List</h1>

<div className="admin-layout">

{/* LEFT FORM */}

<div className="admin-form-card">

<h2>{editIndex!==null?"Edit Project":"Add Project"}</h2>

<form className="admin-form" onSubmit={handleSubmit}>

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
{editIndex!==null?"Update Project":"Add Project"}
</button>

</form>

</div>


{/* RIGHT TABLE */}

<div className="admin-table-card">

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
<td>{p.skills}</td>
<td>{p.budget}</td>
<td>{p.country}</td>

<td>

<div className="action-buttons">

<button
className="edit-btn"
onClick={()=>handleEdit(i)}
>
Edit
</button>

<button
className="delete-btn"
onClick={()=>handleDelete(i)}
>
Delete
</button>

</div>

</td>
</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default AdminProjects