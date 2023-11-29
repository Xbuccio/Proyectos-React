import Dark from "../components/Dark";
import IconoEs from "../icons/es"
import "../styles/Navegador.css"

function Navegador() {
  return (
    <nav>
      <div className="navItems" id="nav1">
        <button>git</button>
        <button>linkedin </button>
        <button>compartir</button>
      </div>

      <div className="navItems" id="nav2">
        <IconoEs/>
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