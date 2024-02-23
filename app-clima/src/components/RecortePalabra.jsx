import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

function RecortePalabra({ nombreDiaSemana }) {
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
  const [mostrarCompleto, setMostrarCompleto] = useState(true);

  useEffect(() => {
    function manejarCambioTamaño() {
      setAnchoVentana(window.innerWidth);
    }

    window.addEventListener('resize', manejarCambioTamaño);

    return () => {
      window.removeEventListener('resize', manejarCambioTamaño);
    };
  }, []);

  useEffect(() => {
    if (anchoVentana <= 1150) {
      setMostrarCompleto(false);
    } else {
      setMostrarCompleto(true);
    }
  }, [anchoVentana]);

  return (
    <div>
      {mostrarCompleto ? (
        <p className=''>{nombreDiaSemana}</p>
      ) : (
        <p className='texto-mayusculas'>{nombreDiaSemana.split("", 3)}</p>
      )}
    </div>
  );
}

RecortePalabra.prototype = {
  nombreDiaSemana: PropTypes.object.isRequired,
  split: PropTypes.object
}

export default RecortePalabra;
