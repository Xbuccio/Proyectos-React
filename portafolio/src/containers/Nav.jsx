import Dark from "../components/Dark";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/fa-brands/linkedin';
import "../styles/Navegador.css"


function Navegador({ cambiarTema }) {


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
          <Icon icon="fa-brands:discord" width="40" height="40" />
        </a>
       
      </div>

      <div className="navItems" id="nav2">
        <Dark cambiarTema={cambiarTema}/>
      </div>
    </nav>
  )
}

export default Navegador;