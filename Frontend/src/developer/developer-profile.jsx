import React, { useState } from "react";

function DeveloperProfile() {

  const [profile, setProfile] = useState({
    name: "",
    location: "",
    primarySkill: "",
    secondarySkill: "",
    experience: "",
    bio: "",
    portfolio: ""
  });

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  }

  function saveProfile(e) {
    e.preventDefault();
    alert("Profile Saved Successfully");
  }

  return (

    <div className="main">

      <h1>Developer Profile</h1>

      <form onSubmit={saveProfile}>

        <input name="name" placeholder="Name" onChange={handleChange} />

        <input name="location" placeholder="Location" onChange={handleChange} />

        <input name="primarySkill" placeholder="Primary Skill" onChange={handleChange} />

        <input name="secondarySkill" placeholder="Secondary Skill" onChange={handleChange} />

        <input name="experience" placeholder="Experience (years)" onChange={handleChange} />

        <textarea name="bio" placeholder="Short Bio" onChange={handleChange}></textarea>

        <input name="portfolio" placeholder="Portfolio Link" onChange={handleChange} />

        <button type="submit">Save Profile</button>

      </form>

    </div>

  );
}

export default DeveloperProfile;