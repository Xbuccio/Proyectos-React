import Flecha from '../icons/flecha.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Ajustes.css'

function Ajustes({ ajustesNav, setAjustesNav, setUbicacion }) {
  const [nuevaUbicacion, setNuevaUbicacion] = useState('');

  const handleClick = () => {
    setAjustesNav(false);
  };

  const handleChangeUbicacion = (event) => {
    setNuevaUbicacion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nuevo valor del formulario:", nuevaUbicacion); // Agregar console.log aquí
    setUbicacion(nuevaUbicacion); // Aquí actualizas la ubicación con el valor del formulario
    console.log("Ubicación guardada:", nuevaUbicacion); // Agregar console.log aquí
  };

  return (
    <div className={`ajustes-contain ${ajustesNav ? 'show' : ''}`}>
      <picture>
        <img src={Flecha} alt="" onClick={handleClick} className='icon-nav' />
      </picture>
      <h1>Clima</h1>
      <div>
        <p>Ubicación Actual</p>
        <input type="checkbox" name="" id="" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nuevaUbicacion">Nueva Ubicación:</label>
        <input type="text" id="nuevaUbicacion" value={nuevaUbicacion} onChange={handleChangeUbicacion} />
        <button type="submit">Guardar Ubicación</button>
      </form>
      <hr />
      <p>Unidad de Temperatura</p> <input type="checkbox" name="" id="" />
      <p>Fondo Animado</p> <input type="checkbox" name="" id="" />
      <p>Comentarios</p>
    </div>
  );
}

Ajustes.propTypes = {
  ajustesNav: PropTypes.bool,
  setAjustesNav: PropTypes.func,
  setUbicacion: PropTypes.func.isRequired // Aquí asegúrate de que setUbicacion sea requerido
};

export default Ajustes;
