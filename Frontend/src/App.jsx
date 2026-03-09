import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

/* MAIN PAGES */

import Home from "./pages/Home"
import Marketplace from "./pages/Marketplace"
import ProjectDetails from "./pages/ProjectDetails"
import DeveloperProfile from "./pages/DeveloperProfile"
import AdminDashboard from "./pages/AdminDashboard"

/* NEW PAGES */    

import ApplyProject from "./pages/ApplyProject"
import ApplicationStatus from "./pages/ApplicationStatus"

/* DEVELOPER AREA */

import DeveloperRegister from "./pages/DeveloperRegister"
import DeveloperLogin from "./pages/DeveloperLogin"
import DeveloperDashboard from "./pages/DeveloperDashboard"
import MyApplications from "./pages/MyApplications"
import EditDeveloperProfile from "./pages/EditDeveloperProfile"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/apply/:id" element={<ApplyProject />} />

        <Route path="/developer/:id" element={<DeveloperProfile />} />

        <Route path="/developer/edit" element={<EditDeveloperProfile />} />

        <Route path="/applications" element={<ApplicationStatus />} />

        <Route path="/my-applications" element={<MyApplications />} />

        <Route path="/developer-register" element={<DeveloperRegister />} />

        <Route path="/developer-login" element={<DeveloperLogin />} />

        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App    