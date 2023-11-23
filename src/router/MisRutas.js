import React from 'react'
import { Route,Routes, BrowserRouter,NavLink } from 'react-router-dom'
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio'; 
import { Trabajos } from '../components/Trabajos' ;

export const MisRutas = () => {
  return (
   <BrowserRouter>
{/*Header y Navegacion*/}



{/*Contenido Central*/}
<Routes>

<Route path='/' element={<Inicio/>}/>
<Route path='/contacto' element={<Contacto/>}/>
<Route path='/trabajos' element={<Trabajos/>}/>

</Routes>


{/*Footer*/}
   </BrowserRouter>
  )
}
