function Marketplace() {

  const projects = [
    {
      title: "React Website Development",
      budget: "$1000",
      skills: "React, Node.js"
    },
    {
      title: "Mobile App Development",
      budget: "$2000",
      skills: "Flutter, Firebase"
    },
    {
      title: "Ecommerce Website",
      budget: "$1500",
      skills: "MERN Stack"
    }
  ];

  return (

    <div className="marketplace">

      <h1>Project Marketplace</h1>

      <div className="projects">

        {projects.map((project,index)=>(
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>Budget: {project.budget}</p>

            <p>Skills: {project.skills}</p>

            <button>View Details</button>

          </div>
        ))}

      </div>

    </div>

  );
}

export default Marketplace;