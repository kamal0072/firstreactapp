import React from 'react'
import Navigation from './components/Navigation'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import Manage from './components/Manage'
export default function App() {
  return (
    <>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/students' element={<Students />} />
                <Route path='/manage' element={<Manage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
