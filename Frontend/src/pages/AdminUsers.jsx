import { useState } from "react";
import developersData from "../data/developers";

function AdminUsers(){

const [developers,setDevelopers] = useState(developersData)

const [form,setForm] = useState({
name:"",
skill:"",
experience:"",
rating:""
})

const [editIndex,setEditIndex] = useState(null)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()

if(editIndex !== null){

const updated = [...developers]
updated[editIndex] = form
setDevelopers(updated)
setEditIndex(null)

}else{

setDevelopers([...developers,form])

}

setForm({
name:"",
skill:"",
experience:"",
rating:""
})

}

function handleEdit(index){
setForm(developers[index])
setEditIndex(index)
}

function handleDelete(index){
const updated = developers.filter((_,i)=>i!==index)
setDevelopers(updated)
}

return(

<div className="admin-page">

<h1>Admin - Users Management</h1>

<div className="admin-layout">

{/* FORM SIDE */}

<div className="admin-form-card">

<h2>{editIndex !== null ? "Edit Developer" : "Add Developer"}</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Developer Name"
value={form.name}
onChange={handleChange}
/>

<input
name="skill"
placeholder="Primary Skill"
value={form.skill}
onChange={handleChange}
/>

<input
name="experience"
placeholder="Experience (years)"
value={form.experience}
onChange={handleChange}
/>

<input
name="rating"
placeholder="Rating"
value={form.rating}
onChange={handleChange}
/>

<button type="submit">
{editIndex !== null ? "Update User" : "Add User"}
</button>

</form>

</div>


{/* TABLE SIDE */}

<div className="admin-table-card">

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Skill</th>
<th>Experience</th>
<th>Rating</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{developers.map((dev,i)=>(

<tr key={i}>

<td>{dev.name}</td>

<td>{dev.skill}</td>

<td>{dev.experience} yrs</td>

<td>{dev.rating}</td>

<td>

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

export default AdminUsers