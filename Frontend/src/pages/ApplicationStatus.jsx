function ApplicationStatus(){

const applications = [

{
project:"React Website",
status:"Applied"
},

{
project:"Mobile App",
status:"Shortlisted"
},

{
project:"Ecommerce Platform",
status:"Rejected"
},

{
project:"AI Project",
status:"Awarded"
}

]

return(

<div className="container">

<h1>My Applications</h1>

{applications.map((a,i)=>(

<div className="card" key={i}>

<h3>{a.project}</h3>

<p>Status: {a.status}</p>

</div>

))}

</div>

)

}

export default ApplicationStatus