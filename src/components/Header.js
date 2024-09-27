// Header.js
import React from 'react';
import logo from '../logo.png'; // Make sure the logo path is correct

const Header = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24" /> {/* Adjust the width if needed */}
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#catalogo" className="hover:text-yellow-500">Catálogo</a></li>
            <li><a href="#favoritos" className="hover:text-yellow-500">Favoritos</a></li>
            <li><a href="#contato" className="hover:text-yellow-500">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
