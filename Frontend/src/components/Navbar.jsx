import { Link } from "react-router-dom"

function Navbar(){

return(

<div className="navbar">

<h2>Spartan Tech Marketplace</h2>

<div>

<Link to="/">Home</Link>

<Link to="/marketplace">Marketplace</Link>

<Link to="/admin">Admin Dashboard</Link>

</div>

</div>

)

}

export default Navbar