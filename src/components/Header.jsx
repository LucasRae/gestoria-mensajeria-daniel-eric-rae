import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/Logo.png';


export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="mi-header">
      <div className="header-contenedor">
         {/* Logo como botón que lleva a #sobre-mi */}
        <a className="logo" href="#sobre-mi" onClick={cerrarMenu}>
          <img src={Logo} alt="Logo Daniel Rae" className="logo-img" />
          Gestoría y mensajería
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          &#9776;
        </button>

        <ul className={`menu ${menuAbierto ? 'activo' : ''}`}>
          <li><a href="#sobre-mi" onClick={cerrarMenu}>Sobre mí</a></li>
          <li><a href="#servicios" onClick={cerrarMenu}>Servicios</a></li>
          <li><a href="#referencias" onClick={cerrarMenu}>Referencias</a></li>
          <li><a href="#contacto" onClick={cerrarMenu}>Contacto</a></li>
        </ul>
      </div>
    </header>
  );
}
