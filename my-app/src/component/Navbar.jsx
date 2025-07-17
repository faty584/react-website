import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "../assets/menu.png";
import menustar from "../assets/menustar.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="allmenu">
      <nav className="navbar">
        <div className="twostart">
          <img src={menustar} alt="Nav bar logo" className="logo" />
          <h2 className="start">Start</h2>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menu} alt="Menu" />
        </div>

        {/* Dropdown Menu (Mobile) */}
        <ul className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
