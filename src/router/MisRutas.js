import React from "react";
import  '../App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Trabajos } from "../components/Trabajos";
import { Footer } from "../components/layout/Footer";
import { ModuleParallax } from "../components/layout/Parallax";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Galeria} from "../components/Galeria";
import { Servicios } from "../components/Servicios";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*Header y Navegacion*/}
      <div className='general'> 
      <HeaderNav></HeaderNav>
      <ModuleParallax></ModuleParallax>
      <div className='content'> 
     
     
   
      {/*Contenido Central*/}
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <Galeria></Galeria>
      
      {/*Footer*/}
  
      <Footer></Footer>
      </div>
      </div>
    </BrowserRouter>
  );
};
