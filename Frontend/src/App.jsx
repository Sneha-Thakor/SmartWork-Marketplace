import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProjectDetails from "./pages/ProjectDetails";
import DeveloperProfile from "./pages/DeveloperProfile";
import AdminDashboard from "./pages/AdminDashboard";

import ApplyProject from "./pages/ApplyProject";
import ApplicationStatus from "./pages/ApplicationStatus";

import AdminUsers from "./pages/AdminUsers";
import AdminProjects from "./pages/AdminProjects";

function App() {

  return (
    <BrowserRouter>

      {/* Navbar always visible */}

      <Navbar />

      <Routes>

        {/* Public Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/apply/:id" element={<ApplyProject />} />

        <Route path="/developer/:id" element={<DeveloperProfile />} />

        <Route path="/applications" element={<ApplicationStatus />} />

        {/* Admin Section */}

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/users" element={<AdminUsers />} />

        <Route path="/admin/projects" element={<AdminProjects />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;