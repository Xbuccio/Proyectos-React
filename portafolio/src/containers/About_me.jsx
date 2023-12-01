import { HTML5Icon, CSS3Icon, JavaScriptIcon, TypeScriptIcon, ReactIcon, Tailwindcss, Astro, Vite, NodeJs, Figma, Python, Sass } from '../icons/icons';
import { useContext } from "react"
import LanguageContext from "../components/LanguageContext"
import "../styles/About_me.css";

function About_Me() {
  const { language } = useContext(LanguageContext)

  return (
    <section className="about_me">
      <h1>{language ? 'Acerca de mí' : 'About me'}</h1>
      <p className='about_me_p'>
        {language
          ? '¡Hola! Soy Franco Buccio, un apasionado desarrollador de software con sólida experiencia en el ámbito del Front End. A lo largo de mi carrera, he centrado mi atención en esta área, explorando y perfeccionando mis habilidades para crear experiencias de usuario impactantes.'
          : 'Hello! I am Franco Buccio, an enthusiastic software developer with a strong background in Front End development. Throughout my career, I have focused on this area, exploring and honing my skills to create impactful user experiences.'
        }
      </p>
      <p className='about_me_p'>
        {language
          ? 'Resido en la ciudad de Buenos Aires, Argentina. Hablo español con fluidez, siendo mi lengua materna, y tengo un nivel de inglés medio que me permite comunicarme efectivamente. Esta diversidad lingüística enriquece mi capacidad para colaborar y comprender diferentes perspectivas en el mundo del desarrollo de software.'
          : 'I reside in the city of Buenos Aires, Argentina. I speak Spanish fluently, being my native language, and I have a medium level of English that allows me to communicate effectively. This linguistic diversity enriches my ability to collaborate and understand different perspectives in the world of software development.'
        }
      </p>

      <hr />
      <div className='about_me_exp'>
        <div>
          <h3 className='about_me_barra'>{language ? 'Experiencia' : 'Experience'}</h3>
          <ul className="about_me_list">
            <li><span className="about_me_span">2022 - {language ? "Hoy" : "Today"}</span> {language ? 'Hospital Simplemente Evita' : 'Simply Evita Hospital'}</li>
            <li><h4>{language ? 'Mantenimiento de Sistemas y Redes' : 'System and Network Maintenance'}</h4></li>
            <li><p>{language ? 'Resuelvo cualquier problema que pueda surgir con las PC del hospital, desde problemas de hardware y software hasta gestión de redes y bases de datos.' : 'I solve any problems that may arise with the hospital\'s PCs, from hardware and software issues to network and database management.'}</p></li>
          </ul>
        </div>
        <div>
          <h3 className='about_me_barra'>{language ? 'Estudios' : 'Studies'}</h3>
          <ul className="about_me_list">
            <li><span className="about_me_span2">2021 - {language ? "En progreso" : "In progress"}</span></li>
            <li><h4>{language ? 'Ingeniería en Informática.' : 'Computer Engineering.'}</h4></li>
            <li><p>{language ? 'Universidad Nacional de la Matanza' : 'National University of La Matanza'}</p></li>

            <li><span className="about_me_span2">2020 - 2021</span></li>
            <li><h4>{language ? 'Curso en Fundamentos de la Programación' : 'Course in Fundamentals of Programming'}</h4></li>
            <li><p>{language ? 'Universidad Tecnológica Nacional' : 'National Technological University'}</p></li>

            <li><span className="about_me_span2">2014 - 2019</span></li>
            <li><h4>{language ? 'Diploma de Secundaria en Ciencias Sociales' : 'High School Diploma in Social Sciences'}</h4></li>
            <li><p>{language ? 'Colegio Hogar San Mauricio' : 'San Mauricio Home School'}</p></li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <h3 className='about_me_barra'>{language ? 'Tecnologías' : 'Technologies'}</h3>
        <ul className="about_me_list_icons">
          <li><HTML5Icon /></li>
          <li><CSS3Icon /></li>
          <li><JavaScriptIcon /></li>
          <li><TypeScriptIcon /></li>
          <li><ReactIcon /></li>
          <li><NodeJs /></li>
          <li><Astro /></li>
          <li><Python /></li>
          <li><Tailwindcss /></li>
          <li><Sass /></li>
          <li><Figma /></li>
          <li><Vite /></li>
        </ul>
      </div>
    </section>
  );
}

export default About_Me;