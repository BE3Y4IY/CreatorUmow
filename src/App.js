// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UtworzUmowy from './pages/UtworzUmowy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/utworz-umowy" element={<UtworzUmowy />} />
      </Routes>
    </Router>
  );
}

export default App;
