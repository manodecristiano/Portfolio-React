

import React, { useState, useRef, useEffect } from "react";

import "../css/Weather.css";



const api = {
  key: "63e442589b5acb21a4f447908f39ce8e",
  base: "https://api.openweathermap.org/data/2.5/"
};



function Weather() {
  const [data, setData] = useState('Barcelona');
  const [clima, setClima] = useState({});
  const [placeholder, setPlaceholder] = useState('Escribe un lugar');



// Llamada a la API al montar el componente para obtener el tiempo de Barcelona por defecto
useEffect(() => {
  fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setClima(result);
      console.log(result);
      setPlaceholder('Escribe otro lugar');
    });
}, [data]);



  const buscar = evento =>{
    if (evento.key === "Enter"){
      fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => { 
          setClima(result);
          setData('');
          console.log(result);
          });
        }
      }

        // FUNCION PARA LA FECHA
   const fechaFunc = (f) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
   let dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ];
  
    let dia = dias[f.getDay()]
    let fecha = f.getDate();
    let mes = meses[f.getMonth()]
    let año = f.getFullYear();

   return `${dia} ${fecha} ${mes} ${año}`
  }
      
        const input = useRef(null);


  return (
    <div
      className={
        typeof clima.main != "undefined"
          ? clima.main.temp < 13
            ? "App frio"
            : clima.main.temp >= 25
            ? "App calor"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="buscador-contenedor">
        
          <input
            ref={input}
            type="text"
            className="buscador-bar"
            placeholder={placeholder}
            onChange={(e) => setData(e.target.value)}
            value={data}
            onKeyDown={buscar}     
          />


          
        </div>
        {typeof clima.main != "undefined" ? (
          <div  className="clima-contenedor-general">
            <div className="clima-contenedor">
             
              <div className="temp">{`${Math.round(clima.main.temp)}°`}</div>
              <div className="estado">{clima.weather[0].main}</div>
        
            </div>
            <div className="location-contenedor">
                <div className="location">
                  {clima.name} {clima.sys.country}
                </div>
              {<div className="fecha">{fechaFunc(new Date())}</div>  }
            </div>
          </div>
        ) : (
          " "
        )}
      </main>
    </div>
  );
}

export default Weather;