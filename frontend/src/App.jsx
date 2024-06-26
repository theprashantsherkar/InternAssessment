import React from 'react'
import Header from '../components/Header.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Home from '../pages/Home.jsx'
import { Toaster } from 'react-hot-toast'
import Profile from '../pages/Profile.jsx'




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />


        </Routes>

        <Toaster />
        
      </Router>

    </>
  )
}

export default App