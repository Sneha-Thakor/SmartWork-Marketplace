import { useState } from "react"

function ApplyProject(){

const [proposal,setProposal] = useState("")
const [days,setDays] = useState("")

function handleSubmit(e){

e.preventDefault()

alert("Application Submitted Successfully!")

setProposal("")
setDays("")

}

return(

<div className="container">

<h1>Apply to Project</h1>

<div className="apply-form">

<form onSubmit={handleSubmit}>

<textarea
placeholder="Write your proposal..."
value={proposal}
onChange={(e)=>setProposal(e.target.value)}
/>

<input
type="number"
placeholder="Expected Delivery Days"
value={days}
onChange={(e)=>setDays(e.target.value)}
/>

<button type="submit">Submit Application</button>

</form>

</div>

</div>

)

}

export default ApplyProject