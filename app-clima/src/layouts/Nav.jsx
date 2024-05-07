import { useState } from 'react'
import actualizar from '../icons/actualizar.png'
import ajuste from '../icons/ajuste.png'
import "../styles/Nav.css"
import Ajustes from '../containers/Ajustes'

function Nav ({ setAjustesNav, setUbicacion }) {

  const [ajustesNav, setAjustesNavLocal] = useState(false);

  const handleClick = () => {
    setAjustesNavLocal(!ajustesNav); // Usamos setAjustesNavLocal aquí
  }

  return (
    <nav> 
      {/** 
       * 
      <img src={actualizar} alt="" className="icon-nav" />
      <img src={ajuste} alt="" className="icon-nav" onClick={handleClick}/>
      {ajustesNav ? 
        <Ajustes ajustesNav={ajustesNav} setAjustesNav={setAjustesNav} setUbicacion={setUbicacion} />
        : 
        <></>
      }
      */}
    </nav>
  )
}

export default Nav