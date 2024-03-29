import "../css/HeaderNav.css";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useEffect , useState} from "react";

export const HeaderNav = () => {
  const location = useLocation();


  const elmntInicio = useRef(null);
  const elmntContacto = useRef(null);
  const elmntTrabajos = useRef(null);
  const elmntServicios = useRef(null);

  useEffect(() => {
    // Actualizar las referencias cuando el componente se monta o cambia de ubicación
    elmntInicio.current = document.getElementById("inicio");
    elmntContacto.current = document.getElementById("contacto");
    elmntTrabajos.current = document.getElementById("trabajos");
    elmntServicios.current = document.getElementById("servicios");
  }, [location]);

  const scrollToInicio = () => {
    if (elmntInicio.current) {
      elmntInicio.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToTrabajos = () => {
    if (elmntTrabajos.current) {
      elmntTrabajos.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };const scrollToServicios = () => {
    if (elmntServicios.current) {
      elmntServicios.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToContacto = () => {
    if (elmntContacto.current) {
      elmntContacto.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

/*Para conseguir el efecto de marcado segun en la seccion en la que estas*/
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const inicioOffset = elmntInicio.current?.offsetTop || 0;
      const trabajosOffset = elmntTrabajos.current?.offsetTop + -950 || 0;
      const serviciosOffset = elmntServicios.current?.offsetTop + -550 || 0;
      const contactoOffset = elmntContacto.current.offsetTop + -800;
    
      const scrollPosition = window.scrollY;

      
    if (scrollPosition >= contactoOffset) {
      setActiveSection("contacto");
    } else if (scrollPosition >= serviciosOffset) {
      setActiveSection("servicios");
    } else if (scrollPosition >= trabajosOffset) {
      setActiveSection("trabajos");
    } else if (scrollPosition >= inicioOffset) {
      setActiveSection("inicio");
    } else {
      setActiveSection(""); 
    }
  };
  
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    
  return (

    
    <div id="sidebar">
   
      <div className="fixedcontainer">
      <div id="container-logo-Nav">
        <h2 className="rope">|</h2>
        <div className="letter-logo">
          <span>C</span>
          <h3>ristian arreño</h3>
        </div>
        </div>
        
        <nav>
          <ul className="menu">
            <li  className={activeSection === "inicio" ? "button-navegacion-active" : "button-navegacion"}>
            
              <Link to="#inicio"  onClick={scrollToInicio}>
                Experiencia
              </Link>
              
            </li>
            <li  className={activeSection === "trabajos" ? "button-navegacion-active" : "button-navegacion"}>
            <Link to="#trabajos"  onClick={scrollToTrabajos}>                
            Trabajos
              </Link>
            
            </li>
            <li  className={activeSection === "servicios" ? "button-navegacion-active" : "button-navegacion"}>
              <Link to="#servicios" onClick={scrollToServicios}>
                Servicios
              </Link>
           
            </li>
            <li  className={activeSection === "contacto" ? "button-navegacion-active" : "button-navegacion"}>
              <Link to="#contacto" onClick={scrollToContacto}>
                Contacto
              </Link>
              
            </li>
          </ul>
        </nav>
      </div>
   
    </div>
 
  );
};