import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Quotes from './components/quotes/Quotes';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </div>
);

export default App;
