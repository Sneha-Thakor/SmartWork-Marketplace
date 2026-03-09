import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

/* MAIN PAGES */
import Home from "./pages/Home"
import Marketplace from "./pages/Marketplace"
import ProjectDetails from "./pages/ProjectDetails"
import AdminDashboard from "./pages/AdminDashboard"

/* NEW PAGES */    
import ApplyProject from "./pages/ApplyProject"
import ApplicationStatus from "./pages/ApplicationStatus"
import DeveloperRegister from "./pages/DeveloperRegister"
import PostProject from "./pages/PostProject"   // ⭐ NEW PAGE

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/apply/:id" element={<ApplyProject />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/application-status" element={<ApplicationStatus />} />

        {/* Developer Register */}
        <Route path="/developer-register" element={<DeveloperRegister />} />

        {/* ⭐ Post Project Page */}
        <Route path="/post-project" element={<PostProject />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App