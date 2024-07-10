import React from 'react'
import "./App.css"
import Home from "./pages/home/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./pages/About/About"
import Signup from "./pages/Signup/Signup"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App