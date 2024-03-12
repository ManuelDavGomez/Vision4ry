import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/img/hero.avif";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} className="logo" alt="" />
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >Servicios</Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="equipo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >Equipo</Link>
        </li>
       
        <li className="nav-item">
          <Link
            activeClass="active"
            to="misivision"
            spy={true}
            smooth={true}
            offset={-220}
            duration={1000}
          >Mision & Vision</Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="portafolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >Portafolio</Link>
        </li>
   

        <li className="nav-item">
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >Contacto</Link>
        </li>

        <li className="nav-item">
          <Link
            activeClass="active"
            to="paquetes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >Paquetes</Link>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
