import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Twister 🐦</div>
      <div className="menu">
        <div>Página Inicial</div>
        <div>Chat</div>
        <div>Sair</div>
      </div>
    </div>
  );
};

export default Header;
