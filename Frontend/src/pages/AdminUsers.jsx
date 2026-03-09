import developers from "../data/developers";

function AdminUsers(){

return(

<div className="admin-page">

<h1>Admin - Users List</h1>

<table className="admin-table">

<thead>

<tr>
<th>Name</th>
<th>Primary Skill</th>
<th>Experience</th>
<th>Rating</th>
</tr>

</thead>

<tbody>

{developers.map((dev,i)=>(

<tr key={i}>
<td>{dev.name}</td>
<td>{dev.skill || dev.primarySkill}</td>
<td>{dev.experience} yrs</td>
<td>{dev.rating || 4.5}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

export default AdminUsers