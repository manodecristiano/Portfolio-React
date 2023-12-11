import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./css/TimeLine.css";
import image1 from "./assets/01-IconoEmpresa.png";
import image2 from "./assets/02-IconoEmpresa.png";
import image3 from "./assets/carousel/03-Icono.png";
import image4 from "./assets/carousel/04-Icono.png";

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
    <h4 className="vertical-timeline-element-subtitle">Madrid</h4>
    <p>
    Google TagManager /
    Google Adsense /
    Google WorkSpace /
    Wordpress
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(8, 93, 121)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 93, 121)' }}
    date="2010 - 2011"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Icono2></Icono2>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image3}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image4}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image1}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image2}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image3}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    conStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={image4}
  />
</VerticalTimeline>

</>
);
};
export default TimeLine;
