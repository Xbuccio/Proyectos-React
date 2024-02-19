import actualizar from '../icons/actualizar.png'
import ajuste from '../icons/ajuste.png'
import "../styles/Nav.css"

function Nav() {
  return (
    <nav>
      <img src={actualizar} alt="" className="icon-nav" />
      <img src={ajuste} alt="" className="icon-nav" />
    </nav>
  )

}

export default Nav