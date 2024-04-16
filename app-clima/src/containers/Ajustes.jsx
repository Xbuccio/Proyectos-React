import Flecha from '../icons/flecha.png'
import PropTypes from 'prop-types';
import '../styles/Ajustes.css'


function Ajustes({ ajustesNav, setAjustesNav }) {


  const handleClick = () => {
    setAjustesNav(false);
  };

  return (
    <div className={`ajustes-contain ${ajustesNav ? 'show' : ''}`}>
      <picture>
        <img src={Flecha} alt="" onClick={handleClick} className='icon-nav' />
      </picture>
      <h1>Clima</h1>
      <div>
        <p>Ubicacion Actual</p><input type="checkbox" name="" id="" />
      </div>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <hr />
      <p>Unidad de Temperatura</p> <input type="checkbox" name="" id="" />
      <p>Fondo Animado</p> <input type="checkbox" name="" id="" />
      <p>comentarios</p>
    </div>
  )
}

Ajustes.propTypes = {
  ajustesNav: PropTypes.bool,
  setAjustesNav: PropTypes.func
}

export default Ajustes
