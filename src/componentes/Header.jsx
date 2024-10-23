import React from 'react'
import '../App.css'
import Logo from './Logo'

function Header() {
  return (
    <header className="header">
      <Logo /> 
      <h1>Farmácia</h1>
    </header>
  );
}

export default Header;