import React from 'react';
import { Link } from 'react-router-dom';  // Certifique-se de importar o Link
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><Link className="hover:text-green-500" to="/">Home</Link></li>
            <li><Link className="hover:text-green-500" to="/catalogo">Catálogo</Link></li> {/* Corrigido o 'to' */}
            <li><a href="#favoritos" className="hover:text-green-500">Favoritos</a></li>
            <li><a href="#contato" className="hover:text-green-500">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
