import { useState } from 'react'
import './index.css'
import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Form from './components/Form'
import Details from './components/Details';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
     <Route path="/shows/:id" element={<Details/>}/>
     <Route path="/" element={<Form/>} />
     <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
