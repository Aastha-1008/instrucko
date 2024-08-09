import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../src/components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import BookATrial from './components/BookATrial/BookATrial.jsx';


function App() {

  return (
    <div className='mainSection'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial-class" element={<BookATrial/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
