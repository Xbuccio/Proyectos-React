import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ClimaHora.css';
import Hora from './Hora';

function ClimaHora({ clima }) {
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
          <Hora clima={clima} horaNum={0} />
          <Hora clima={clima} horaNum={1} />
          <Hora clima={clima} horaNum={2} />
          <Hora clima={clima} horaNum={3} />
          <Hora clima={clima} horaNum={4} />
          <Hora clima={clima} horaNum={5} />
          <Hora clima={clima} horaNum={6} />
          <Hora clima={clima} horaNum={7} />
          <Hora clima={clima} horaNum={8} />
          <Hora clima={clima} horaNum={9} />
          <Hora clima={clima} horaNum={10} />
          <Hora clima={clima} horaNum={11} />
          <Hora clima={clima} horaNum={12} />
          <Hora clima={clima} horaNum={13} />
          <Hora clima={clima} horaNum={14} />
          <Hora clima={clima} horaNum={15} />
          <Hora clima={clima} horaNum={16} />
          <Hora clima={clima} horaNum={17} />
          <Hora clima={clima} horaNum={18} />
          <Hora clima={clima} horaNum={19} />
          <Hora clima={clima} horaNum={20} />
          <Hora clima={clima} horaNum={21} />
          <Hora clima={clima} horaNum={22} />
          <Hora clima={clima} horaNum={23} />
        </div>
      </div>
    </div>
  );
}

ClimaHora.propTypes = {
  clima: PropTypes.object
};

export default ClimaHora;
