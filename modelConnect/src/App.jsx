import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/navbar'
import Navbar from './components/navbar'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer'
import Signup from './pages/signup'
import Contact from './pages/contact';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
