import React from "react";
import Navbar from "../components/Navbar";
import developers from "../data/developers";
import DeveloperCard from "../components/DeveloperCard";

function DeveloperProfile() {
  return (
    <div>
      <Navbar />

      <h1>Developers</h1>

      <div className="developer-grid">
        {developers.map((dev) => (
          <DeveloperCard key={dev.id} developer={dev} />
        ))}
      </div>
    </div>
  );
}

export default DeveloperProfile;