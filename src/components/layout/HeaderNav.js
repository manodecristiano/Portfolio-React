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
      const trabajosOffset = elmntTrabajos.current?.offsetTop + -150 || 0;
      const serviciosOffset = elmntServicios.current?.offsetTop + -250 || 0;
      const contactoOffset = elmntContacto.current.offsetTop + -505||0;
    

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
    <div className="sidebar">
      <div className="fixedcontainer">
        <h2 className="cuerda">|</h2>
        <div className="logo">
          <span>C</span>
          <h3>ristian arreño</h3>
        </div>
        <nav>
          <ul className="menu">
            <li>
              <Link to="#inicio" className={activeSection === "inicio" ? "active2" : ""} onClick={scrollToInicio}>
                Inicio
              </Link>
            </li>
            <li>
            <Link to="#trabajos" className={activeSection === "trabajos" ? "active2" : ""} onClick={scrollToTrabajos}>                Trabajos
              </Link>
            </li>
            <li>
              <Link to="#servicios" className={activeSection === "servicios" ? "active2" : ""}onClick={scrollToServicios}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="#contacto" className={activeSection=== "contacto" ? "active2" : ""} onClick={scrollToContacto}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};