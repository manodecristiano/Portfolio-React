import React from 'react'
import { Route,Routes, BrowserRouter,NavLink } from 'react-router-dom'
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio'; 
import { Trabajos } from '../components/Trabajos' ;
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';

export const MisRutas = () => {
  return (
   <BrowserRouter>
   
   {/*Header y Navegacion*/}
    <HeaderNav></HeaderNav>

   {/*Contenido Central*/}
    <Routes>

     <Route path='/' element={<Inicio/>}/>
     <Route path='/contacto' element={<Contacto/>}/>
     <Route path='/trabajos' element={<Trabajos/>}/>

    </Routes>


   {/*Footer*/}
   <hr/>
     <Footer></Footer>

   </BrowserRouter>
  )
}
