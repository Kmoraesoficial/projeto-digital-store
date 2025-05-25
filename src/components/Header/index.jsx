import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // você pode customizar com CSS próprio

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Início</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
      </nav>
    </header>
  );
};

export default Header;
