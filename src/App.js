import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import EmployeeDashboard from './pages/EmployeeDashboard'
import ApplyLeave from './pages/ApplyLeave'
import AdminDashBoard from './pages/AdminDashBoard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EmployeeDashboard/> */}
      {/* < ApplyLeave /> */}
      {/* <AdminDashBoard /> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/applyLeave" element={<ApplyLeave />} />
        <Route path="/adminDashboard" element={<AdminDashBoard />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="*" element={<Error/>} /> */}
      </Routes>
    </>
  )
}

export default App