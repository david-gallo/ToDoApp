import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar" aria-label="Barra de navegación principal">
            <div className="links">
          <Link to="/" className="link">Tareas</Link>
            <Link to="/horarios" className="link">Horarios</Link>
            <Link to="/notas" className="link">Notas</Link>
            </div>
        </nav>
    
    )

}



export default NavBar