// src/pages/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.scss';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="content">
        <aside className="sidebar">
          <button onClick={() => navigate('/utworz-umowy')}>Utwórz Umowę</button>
          <button onClick={() => navigate('/lista-umow')}>Lista Umów</button>
        </aside>
      </div>
    </div>
  );
};

export default MainPage;
