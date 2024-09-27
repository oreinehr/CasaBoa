import React from 'react';
import { Link } from 'react-router-dom';  // Certifique-se de importar o Link
import logo2 from '../logo2.png';

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full h-30 z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo2">
          <img src={logo2} alt="Logo" className="w-24" />
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-black">
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
