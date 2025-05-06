// src/pages/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.scss';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <header className="header">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <div className="user-info">
          <div>Handlowiec</div>
          <div className="email">test@mail.com</div>
        </div>
        <button className="logout-button">Wyloguj</button>
      </header>

      <div className="content">
        <aside className="sidebar">
          
          <button onClick={() => navigate('/utworz-umowy')}>Utwórz Umowy</button>
        </aside>

        
      </div>
    </div>
  );
};

export default MainPage;
