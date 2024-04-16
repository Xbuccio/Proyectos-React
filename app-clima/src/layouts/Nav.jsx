import { useState } from 'react'
import actualizar from '../icons/actualizar.png'
import ajuste from '../icons/ajuste.png'
import "../styles/Nav.css"
import Ajustes from '../containers/Ajustes'

function Nav () {

  const [ajustesNav, setAjustesNav] = useState(false)

  const handleClick = () => {
    setAjustesNav(!ajustesNav)
  }

  return (
    <nav>
      <img src={actualizar} alt="" className="icon-nav" />
      <img src={ajuste} alt="" className="icon-nav" onClick={handleClick}/>
      {ajustesNav ? 
        <Ajustes ajustesNav={ajustesNav} setAjustesNav={setAjustesNav}/>
          : 
        <></>
      }
    </nav>
  )
}

export default Nav