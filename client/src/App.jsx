import React from 'react'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Singin from './pages/Singin'
import Singup from './pages/Singup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
 
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/singin' element={<Singin/>} />
      <Route path='/singup' element={<Singup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    </BrowserRouter>
    
  )
}
