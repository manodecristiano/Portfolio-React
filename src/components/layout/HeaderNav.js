import React from "react";
import "../css/HeaderNav.css";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <div className="sidebar">
      <div className="fixedcontainer">
    <div className="logo">
        <span>C</span>
        <h3> ristian arreño</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/inicio" className={({isActive})=> isActive? 'active2' : ''}> Home </NavLink>
          </li>
          
          <li>
            <NavLink to="/trabajos" className={({isActive})=> isActive? 'active2' : ''}> Trabajos </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({isActive})=> isActive? 'active3' : ''}> Servicios </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" className={({isActive})=> isActive? 'active4' : ''}> Contacto </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  
  );
};
