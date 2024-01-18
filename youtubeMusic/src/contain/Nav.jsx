import Biblioteca from "../icons/biblioteca.png"
import Compartir from "../icons/compartir.png"
import Buscador from "../icons/buscador.png"
import Brujula from "../icons/brujula.png"
import Perfil from "../icons/perfil.png"
import Barra from "../icons/barra.png"
import Casa from "../icons/casa.png"
import "../styles/Nav.css"
import { useRef, useState } from "react"


const Nav = ({ open, onOpenChange }) => {
  const [busqueda, setBusqueda] = useState('')
  const inputRef = useRef(null);

  const handleChangeInput = (event) => {
    setBusqueda(event.target.value);
  };

  const handleClickBuscador = () => {
    // Enfocar el input al hacer clic en el icono de búsqueda
    inputRef.current.focus();
  };

  const handleClickOpen = () => {
    onOpenChange();
  };

  return (
    <>
      <nav>
        <div className="container-nav1">
          <button className="button-nav" onClick={handleClickOpen}>
            <img src={Barra} className="icono-nav" />
          </button>
          <a href="">
            <img src="//music.youtube.com/img/on_platform_logo_dark.svg" className="icono-youtube" />
          </a>
          <div className={`nav-buscador ${open ? 'buscador-close' : 'buscador-open'}`}>
            <img src={Buscador} alt="" className="icono-nav" onClick={handleClickBuscador} />
            <input
              ref={inputRef}
              type="search"
              value={busqueda}
              onChange={handleChangeInput}
              placeholder="Buscar canciones, álbumes, artistas o podcasts"
            />
          </div>
        </div>
        <div className="container-nav2">
          <img src={Compartir} alt="" className="icono-nav" />
          <img src={Perfil} alt="" className="icono-nav" />
        </div>
      </nav>


      <div className={`barra-lateral ${open ? 'open' : 'close'}`}>
        <div className={`${open ? 'relleno' : ''}`}></div>
        <div className={`container-icons ${open ? 'container-small' : 'flex-colum'}`}>
          <a href="">
            <button className={`button-nav ${open ? 'flex-row' : 'flex-colum'}`}>
              <img src={Casa} alt="" className="icono-nav" />
              <p className={` ${open ? 'text-open' : 'text-close'}`}>Principal</p>
            </button>
          </a>
        </div>
        <div className={`container-icons ${open ? 'container-small' : 'flex-colum'}`}>
          <a href="">
            <button className={`button-nav ${open ? 'flex-row' : 'flex-colum'}`}>
              <img src={Brujula} alt="" className="icono-nav" />
              <p className={` ${open ? 'text-open' : 'text-close'}`}>Explorar</p>
            </button>
          </a>
        </div>
        <div className={`container-icons ${open ? 'container-small' : 'flex-colum'}`}>
          <a href="">
            <button className={`button-nav ${open ? 'flex-row' : 'flex-colum'}`}>
              <img src={Biblioteca} alt="" className="icono-nav" />
              <p className={` ${open ? 'text-open' : 'text-close'}`}>Biblioteca</p>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav