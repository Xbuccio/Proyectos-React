import Dark from "../components/Dark";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/fa-brands/linkedin';
import shareBoldIcon from '@iconify-icons/solar/share-bold';
import "../styles/Navegador.css"

function Navegador() {
  return (
    <nav>
      <div className="navItems" id="nav1">
        <a href="https://github.com/Xbuccio" target="_blank" rel="noopener noreferrer">
          <Icon icon={githubIcon} width="40" height="40"/>
        </a>
        <a href="https://www.linkedin.com/in/francobuccio/" target="_blank" rel="noopener noreferrer">
          <Icon icon={linkedinIcon} width="40" height="40"/>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Icon icon={shareBoldIcon} width="40" height="40"/>
        </a>
       
      </div>

      <div className="navItems" id="nav2">
        <Dark />
      </div>
      
      {/**<Accordion
              cambiarIdiomaEs={cambiarIdiomaEs} cambiarIdiomaNa={cambiarIdiomaNa}
              cambiarColor1={cambiarColor1} cambiarColor2={cambiarColor2}
      />*/}
    </nav>
  )
}

export default Navegador;