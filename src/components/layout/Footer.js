import React from 'react';
import "../css/Footer.css";


export const Footer = () => {

  const scrollTop=()=> {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}
   
      return (
        <div>
         
          <div className="footer">
            <button id="buttontoTop" onClick={scrollTop} >
             V
            </button>
            
          <div id="footerText">
          <h3>Muchas Gracias por llegar hasta aquí.</h3>
         
          <h4>Todos los derechos reservados. Cristian Carreño ©️&nbsp; {new Date().getFullYear()}</h4> 
          
          </div>
          </div>

        </div>
      );
    };
    
    export default Footer;
  

