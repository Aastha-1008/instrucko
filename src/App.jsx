import { useState } from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className='mainSection'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
