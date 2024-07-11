import { useState } from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className='mainSection'>
      <Header/>
      <h1 style={{height: '50vh'}}>Hii</h1>
      <Footer/>
    </div>
  )
}

export default App
