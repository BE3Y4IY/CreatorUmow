// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UtworzUmowy from './pages/UtworzUmowy';
import UmowyLista from './components/UmowyLista';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/utworz-umowy" element={<UtworzUmowy />} />
          <Route path="/lista-umow" element={<UmowyLista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
