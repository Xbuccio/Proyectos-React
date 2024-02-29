import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ClimaHora.css';
import Hora from './Hora';

function ClimaHora({ clima, color }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if (!clima) {
    return <div>Cargando...</div>;
  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta el valor según la sensibilidad deseada
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="container-climahora">
      <div
        className="container-hora"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="carrusel">
          <Hora clima={clima} color={color} horaNum={0} />
          <Hora clima={clima} color={color} horaNum={1} />
          <Hora clima={clima} horaNum={2} color={color} />
          <Hora clima={clima} horaNum={3} color={color} />
          <Hora clima={clima} horaNum={4} color={color} />
          <Hora clima={clima} horaNum={5} color={color} />
          <Hora clima={clima} horaNum={6} color={color} />
          <Hora clima={clima} horaNum={7} color={color} />
          <Hora clima={clima} horaNum={8} color={color} />
          <Hora clima={clima} horaNum={9} color={color} />
          <Hora clima={clima} horaNum={10} color={color} />
          <Hora clima={clima} horaNum={11} color={color} />
          <Hora clima={clima} horaNum={12} color={color} />
          <Hora clima={clima} horaNum={13} color={color} />
          <Hora clima={clima} horaNum={14} color={color} />
          <Hora clima={clima} horaNum={15} color={color} />
          <Hora clima={clima} horaNum={16} color={color} />
          <Hora clima={clima} horaNum={17} color={color} />
          <Hora clima={clima} horaNum={18} color={color} />
          <Hora clima={clima} horaNum={19} color={color} />
        </div>
      </div>
    </div>
  );
}

ClimaHora.propTypes = {
  clima: PropTypes.object,
  color: PropTypes.bool
};

export default ClimaHora;
