import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Marketplace from "./pages/Marketplace"
import ProjectDetails from "./pages/ProjectDetails"
import DeveloperProfile from "./pages/DeveloperProfile"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/developer/:id" element={<DeveloperProfile />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
