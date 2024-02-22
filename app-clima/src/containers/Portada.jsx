import PropTypes from 'prop-types';
import "../styles/Portada.css"

function Portada({ lugar, clima }) {

  if (!lugar || !clima) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {lugar && (
        <>
          <h2 className="localidad">{lugar?.name}, {lugar?.adm_area1}</h2>
          <p style={{ fontSize: '20px' }}>{lugar?.timezone.split("/").slice(1, 2)}</p>
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