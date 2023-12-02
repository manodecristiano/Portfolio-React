import React from "react";
import "../css/HeaderNav.css";
import { NavLink, useLocation } from "react-router-dom";

export const HeaderNav = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <h2 className="cuerda">|</h2>
      <div className="fixedcontainer">
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
              >
                {" "}
                Sobre mi{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#trabajos"
                className={location.hash === "#trabajos" ? "active2" : ""}
              >
                {" "}
                Trabajos{" "}
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
