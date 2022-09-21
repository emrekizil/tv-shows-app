import { useState } from 'react'
import './index.css'
import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Form from './components/Form'
import Details from './components/Details';
import Navbar from './components/Navbar';
function App() {

  return (
   <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Form/>} />
     <Route path="/shows/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
   </StrictMode>

  )
}

export default App
