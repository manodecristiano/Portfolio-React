import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./css/TimeLine.css";
import image1 from "./assets/01-IconoEmpresa.png";
import image2 from "./assets/02-IconoEmpresa.png";
import image3 from "./assets/03-IconoEmpresa.png";
import image4 from "./assets/04-IconoEmpresa.png";
import image5 from "./assets/05-IconoEstudios.png";

export const TimeLine = () => {
  const Icono1 = () => (
    <img src={image1} alt="Icono" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
  );
  const Icono2 = () => (
    <img src={image2} alt="Icono" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
  );
  const Icono3 = () => (
    <img src={image3} alt="Icono" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
  );
  const Icono4 = () => (
    <img src={image4} alt="Icono" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
  );
  const Icono5 = () => (
    <img src={image5} alt="Icono" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
  );
  
  return (
    <>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(8, 93, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 93, 121)' }}
    date="Junio/2022 - Noviembre/2023" 
    iconStyle={{ background: '#fff', color: 'black' }}
    icon={<Icono1></Icono1>}
  >
    <h3 className="vertical-timeline-element-title"> Líder Innovación Tecnológica en Programatica digital.</h3>
    <h4 className="vertical-timeline-element-subtitle">DeliveryMedia-Madrid</h4>
    <p>
    SEO/
    Google TagManager /
    Google Adsense /
    Google WorkSpace /
    Wordpress  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(8, 93, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 93, 121)' }}
    date="Agosto/2022 - Noviembre/2023" 
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Icono2></Icono2>}
  >
    <h3 className="vertical-timeline-element-title">Maquetador Web</h3>
    <h4 className="vertical-timeline-element-subtitle">GrandVoyage-Barcelona</h4>
    <p>
      Desarrollo integro, Experiencia de usuario, 
      Javascript /
      HTML /
      CSS /
      Bootstrap /
      Control de versiones git
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(8, 93, 121)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(8, 93, 121)' }}
     date="Junio/2022 - Agosto/2022" 
     iconStyle={{ background: '#fff', color: '#fff' }}
     icon={<Icono3></Icono3>}
   >
     <h3 className="vertical-timeline-element-title">Desarrollador Mobile</h3>
     <h4 className="vertical-timeline-element-subtitle">Freelance-Barcelona</h4>
     <p>
       Dirección creativa, Desarrollo integro, Experiencia de usuario,
        Figma /
        AdobeXD /
        Flutter / Ecomerce (Shopify)
     </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(8, 93, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 93, 121)' }}
    date="Dicimebre/2021 - Agosto/2022" 
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Icono4></Icono4>}
  >
    <h3 className="vertical-timeline-element-title">Desarrollador Backend</h3>
    <h4 className="vertical-timeline-element-subtitle">Indra-Barcelona</h4>
    <p>
      Manejo de BBDD, control de versiones,  Desarrollo 
       Java /
       PL1
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgba(8, 93, 121, 0.271)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(8, 93, 121, 0.271)' }}
    date="Septiembre/2019 - Junio/2021" 
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Icono5></Icono5>}
  >
    <h3 className="vertical-timeline-element-title">Grado Superior Desarrollo de Aplicaciones Multiplataforma</h3>
    <h4 className="vertical-timeline-element-subtitle">Stucom-Barcelona</h4>
    <p>
      Java/ Javascript/ MongoDB/ MySQL/ Swift
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--no-children"
    contentStyle={{ background: 'rgba(8, 93, 121, 0.271)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(8, 93, 121, 0.271)' }}
    date="Septiembre/2007 - Junio/2009" 
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Icono5></Icono5>}
  >
    <h3 className="vertical-timeline-element-title">Grado Superior Ilustración/Diseño</h3>
    <h4 className="vertical-timeline-element-subtitle">Pau Gargallo-Barcelona</h4>
    <p>
     Creación y diseño del producto.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>

</>
);
};
export default TimeLine;
