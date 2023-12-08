import "../css/HeaderNav.css";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useEffect } from "react";

export const HeaderNav = () => {
  const location = useLocation();

  const elmntInicio = useRef(null);
  const elmntContacto = useRef(null);
  const elmntTrabajos = useRef(null);
  const elmntServicios = useRef(null);

  useEffect(() => {
    // Actualizar las referencias cuando el componente se monta o cambia de ubicación
    elmntInicio.current = document.getElementById("inicio");
    elmntContacto.current = document.getElementById("contacto");
    elmntTrabajos.current = document.getElementById("trabajos");
    elmntServicios.current = document.getElementById("servicios");
  }, [location]);

  const scrollToInicio = () => {
    if (elmntInicio.current) {
      elmntInicio.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToTrabajos = () => {
    if (elmntTrabajos.current) {
      elmntTrabajos.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };const scrollToServicios = () => {
    if (elmntServicios.current) {
      elmntServicios.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToContacto = () => {
    if (elmntContacto.current) {
      elmntContacto.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              <Link to="#inicio" className={location.hash === "#inicio" ? "active2" : ""} onClick={scrollToInicio}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="#trabajos" className={location.hash === "#trabajos" ? "active2" : ""}onClick={scrollToTrabajos}>
                Trabajos
              </Link>
            </li>
            <li>
              <Link to="#servicios" className={location.hash === "#servicios" ? "active2" : ""}onClick={scrollToServicios}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="#contacto" className={location.hash === "#contacto" ? "active2" : ""} onClick={scrollToContacto}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
