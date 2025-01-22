import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './component/Home';
import About from './component/About';
import Portofolio from './component/Portofolio';
import Clients from './component/Clients';
import Header from './component/Header';
import './App.css'
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
