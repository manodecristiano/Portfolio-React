import React from "react";
import "../App.css";
import { BrowserRouter } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Footer } from "../components/layout/Footer";
import { ModuleParallax } from "../components/layout/Parallax";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Galeria } from "../components/Galeria";
import { Servicios } from "../components/Servicios";

export const MisRutas = () => {

 
  return (
    <BrowserRouter>
      {/*Header y Navegacion*/}
      <div className="general">

        <HeaderNav></HeaderNav>
        <ModuleParallax></ModuleParallax>
        
        <div className="content">

          {/*Contenido Central*/}
          <section id="inicio"><Inicio></Inicio></section>
          
          <section id="galeria"><Galeria></Galeria></section>

          <section id="servicios"><Servicios></Servicios> </section>
        
          <section id="contacto"><Contacto></Contacto></section>
          
          {/*Footer*/}
          <Footer className='footer'></Footer>
        </div>

      </div>
    </BrowserRouter>
  );
};