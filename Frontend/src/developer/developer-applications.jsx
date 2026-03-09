import React from "react";

function DeveloperApplications() {

const applications = [
  { project: "E-commerce Website", status: "Pending" },
  { project: "Mobile App UI", status: "Accepted" }
];

return (

<div className="main">

<h1>My Applications</h1>

<table border="1">

<thead>
<tr>
<th>Project</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{applications.map((app, index) => (

<tr key={index}>
<td>{app.project}</td>
<td>{app.status}</td>
</tr>

))}

</tbody>

</table>

</div>

);

}

export default DeveloperApplications;