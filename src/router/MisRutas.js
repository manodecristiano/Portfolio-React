import React from "react";
import  '/Users/cristiancarreno/Documents/ProyectosProgramacion/React/portfolio-react/src/App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Trabajos } from "../components/Trabajos";
import { Footer } from "../components/layout/Footer";
import { ModuleParallax } from "../components/layout/Parallax";
import { HeaderNav } from "../components/layout/HeaderNav";
import{Galeria} from "../components/Galeria";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*Header y Navegacion*/}
      <div className='general'> 
      <HeaderNav></HeaderNav>
      <ModuleParallax></ModuleParallax>
      <div className='content'> 
     
     <Galeria></Galeria>
   
      {/*Contenido Central*/}
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabajos" element={<Trabajos />} />
      </Routes>

      
      {/*Footer*/}
  
      <Footer></Footer>
      </div>
      </div>
    </BrowserRouter>
  );
};
