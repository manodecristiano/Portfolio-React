import React, { useRef, useEffect, useState } from "react";

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

  const generalRef = useRef(null);
  const [alturaMaxima, setAlturaMaxima] = useState(0);
  const [allIsCharged, setallIsCharged] = useState(false);

  useEffect(() => {

    const changeHeightParallax = () => {
      if (generalRef.current) {
        const alturaGeneral = generalRef.current.clientHeight;
        setAlturaMaxima(alturaGeneral);
      }
    };

    const chargedAll = () => {
      setallIsCharged(true);
    };

    // Manejar redimensionamiento de la ventana
    window.addEventListener("resize", changeHeightParallax);

    // Manejar carga completa del contenido
    window.addEventListener("load", chargedAll);

    // Llamar a changeHeight al montar el componente
    changeHeightParallax();

    // Limpiar los events listeners al desmontar el componente
    return () => {
      window.removeEventListener("resize", changeHeightParallax);
      window.removeEventListener("load", chargedAll);
    };
  }, [generalRef, allIsCharged]);


  return (
    <BrowserRouter>
      {/*Header y Navegacion*/}
      <div className="general">

        <HeaderNav></HeaderNav>
        <ModuleParallax alturaMaxima={alturaMaxima} ></ModuleParallax>
        
        <div className="content" ref={generalRef} >
      
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