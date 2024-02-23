import PropTypes from 'prop-types';
import { diasSemana } from '../components/ObtenerDia'
import "../styles/Portada.css"


function Portada({ lugar, clima }) {

  if (!lugar || !clima) {
    return <div>Cargando...</div>;
  }

  const climaDia = clima?.daily?.data[0]

  const fecha = new Date(climaDia?.day);

  let numeroDiaSemana = (fecha.getDay() + 2) % 7;
  if (numeroDiaSemana === 0) {
    numeroDiaSemana = 7;
  }

  const nombreDiaSemana = diasSemana[numeroDiaSemana];

  return (
    <>
      {lugar && (
        <>
          <div className='container-localidad'>
            <h2 className="localidad">{lugar?.name}, {lugar?.adm_area1}</h2>
            <p>{nombreDiaSemana}</p>
          </div>
        </>
      )}
      {clima && (
        <>
          <div className='container-temperatura'>
            <h1 className="temperatura">{clima?.current?.temperature} °C</h1>
          </div>
          <div className='container-datos'>
            <div className='min-max-portada'>
              <p>{clima?.daily?.data[0]?.all_day?.temperature_min}°</p>
              <p>{clima?.daily?.data[0]?.all_day?.temperature_max}°</p>
            </div>
            <p className="datos-extra"></p>
            <p className="datos-extra">Viento: {clima?.current?.wind?.speed}km/h</p>
            <p className="datos-extra">Precipitaciones: {clima?.current?.precipitation?.total}% </p>
          </div>
        </>
      )}
    </>
  )
}

Portada.propTypes = {
  lugar: PropTypes.object,
  clima: PropTypes.object
};

export default Portada