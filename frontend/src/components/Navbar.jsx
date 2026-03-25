import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
       <img src="/logo.jpeg" alt="FDLA logo" />
        <span className="span-navbar"><strong>FDLA</strong> </span>
       <p> Les Forces De L’au-delà</p>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/fdla">Dossiers</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;