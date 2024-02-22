import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lluvia from '../videos/lluvia.mp4';
import Tormenta from '../videos/tormenta.mp4';
import Despejado from '../videos/despejado.mp4';
import Nublado from '../videos/nublado.mp4';
import LluviaSol from '../videos/lluviaysol.mp4';
import Soleado from '../videos/soleado.mp4';
import Nieve from '../videos/nieve.mp4';
import Nievenoche from '../videos/nievenoche.mp4';
import Noche from '../videos/noche.mp4';
import Nochenublada from '../videos/nochenublada.mp4';
import '../styles/Fondo.css'; // Archivo de estilos para la aplicación

function VideoFondo({ clima }) {
  const [videoFondo, setVideoFondo] = useState(null);

  useEffect(() => {
    const climafondo = clima?.daily?.data[0]?.icon;
    let fondoSeleccionado = null;

    // Mapeo directo de número de clima a video
    const fondoMap = {
      2: Soleado,
      3: Despejado,
      4: Despejado,
      5: Nublado,
      6: Nublado,
      7: Nublado,
      8: Nublado,
      9: Lluvia,
      10: Lluvia,
      11: Lluvia,
      12: Lluvia,
      13: LluviaSol,
      14: Tormenta,
      15: LluviaSol,
      16: Nieve,
      17: Nieve,
      18: Nieve,
      19: Nieve,
      20: Nieve,
      21: Nieve,
      22: Nieve,
      23: Nieve,
      24: Nieve,
      25: Nieve,
      26: Noche,
      27: Nochenublada,
      28: Nochenublada,
      29: Nochenublada,
      30: Nochenublada,
      31: Nochenublada,
      32: Lluvia,
      33: Tormenta,
      34: Nievenoche,
      35: Nievenoche,
      36: Nievenoche,
    };

    // Buscar el video correspondiente al clima actual
    fondoSeleccionado = fondoMap[climafondo];

    setVideoFondo(fondoSeleccionado);
  }, [clima]);

  return (
    <div className="video-background">
      {clima && videoFondo && (
        <video autoPlay loop muted>
          <source src={videoFondo} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

VideoFondo.propTypes = {
  clima: PropTypes.object
};

export default VideoFondo;
