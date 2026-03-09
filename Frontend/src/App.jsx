import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Marketplace from "./pages/Marketplace"
import ProjectDetails from "./pages/ProjectDetails"
import DeveloperProfile from "./pages/DeveloperProfile"
import AdminDashboard from "./pages/AdminDashboard"

/* NEW PAGES */

import ApplyProject from "./pages/ApplyProject"
import ApplicationStatus from "./pages/ApplicationStatus"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}

        <Route path="/" element={<Home />} />

        {/* Marketplace */}

        <Route path="/marketplace" element={<Marketplace />} />

        {/* Project Details */}

        <Route path="/project/:id" element={<ProjectDetails />} />

        {/* Apply Project */}

        <Route path="/apply/:id" element={<ApplyProject />} />

        {/* Developer Profile */}

        <Route path="/developer/:id" element={<DeveloperProfile />} />

        {/* Application Status */}

        <Route path="/applications" element={<ApplicationStatus />} />

        {/* Admin Dashboard */}

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App
