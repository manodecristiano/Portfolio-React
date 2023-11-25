import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <div>
      <h1> Cristian Carreño</h1>

      <nav>
        <ul>
          <li>
            <NavLink to='/inicio'> Inicio </NavLink>
          </li>
          <li>
            <NavLink to='/contacto'> Contacto </NavLink>
          </li>
          <li>
            <NavLink to='/trabajos'> Trabajos </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
