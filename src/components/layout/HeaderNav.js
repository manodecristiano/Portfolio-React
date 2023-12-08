
import "../css/HeaderNav.css";
import { NavLink, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

export const HeaderNav = () => {
  const location = useLocation();
  const inicioRef = useRef(null);
  const [isBotonActivo, setBotonActivo] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Verifica si la posición de la ventana está cerca de la sección de "inicio"
      if (
        inicioRef.current &&
        window.scrollY >= inicioRef.current.offsetTop &&
        window.scrollY < inicioRef.current.offsetTop + inicioRef.current.clientHeight
      ) {
        setBotonActivo(true);
      } else {
        setBotonActivo(false);
      }
    };

    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      
      <div className="fixedcontainer">
      <h2 className="cuerda">|</h2>
        <div className="logo">
          <span>C</span>
          <h3>ristian arreño</h3>
        </div>
        <nav>
          <ul>
            <li>
            <NavLink
                to="#inicio"
                className={location.hash === "#inicio" ? "active2" : ""}
              >Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#trabajos"
                className={location.hash === "#trabajos" ? "active2" : ""}
              >Trabajos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#servicios"
                className={location.hash === "#servicios" ? "active2" : ""}
                >Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#contacto"
                className={location.hash === "#contacto" ? "active2" : ""}
              >
                {" "}
                Contacto{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};