import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Frame 1.svg";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchor) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Lencina Motors" style={{ width: "30px", height: "30px" }} />
        <span>Lencina Motors</span>
      </div>

      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li>
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}>
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="#works" onClick={(e) => { e.preventDefault(); handleNavClick("#works"); }}>
            Trabajos
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>
            Contacto
          </a>
        </li>
        <li>
          <a href="/reserva" onClick={(e) => { e.preventDefault(); setOpen(false); navigate("/reserva"); }}>
            Reservar
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
