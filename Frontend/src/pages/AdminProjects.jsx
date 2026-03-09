import projects from "../data/projects";

function AdminProjects(){

return(

<div className="admin-page">

<h1>Admin - Projects List</h1>

<table className="admin-table">

<thead>

<tr>
<th>Project Title</th>
<th>Skills</th>
<th>Budget</th>
<th>Country</th>
</tr>

</thead>

<tbody>

{projects.map((p,i)=>(

<tr key={i}>

<td>{p.title}</td>

<td>{Array.isArray(p.skills) ? p.skills.join(", ") : p.skills}</td>

<td>${p.budget}</td>

<td>{p.country}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default AdminProjects