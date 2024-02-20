import PropTypes from 'prop-types';
import "../styles/Portada.css"
import IconoCorrecto from '../components/IconoCorrecto';

function Portada({ lugar, clima }) {

  if (!lugar || !clima) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {lugar && (
        <>
          <h2 className="localidad">{lugar?.name}, {lugar?.adm_area1}</h2>
          <p>{lugar?.country}</p>
        </>
      )}
      {clima && (
        <>
          <div className='container-temperatura'>
            <IconoCorrecto clima={clima} num={clima?.current?.icon_num} />
            <h1 className="temperatura">{clima?.current?.temperature} °C</h1>
          </div>
          <p className="datos-extra"></p>
          <p className="datos-extra">Viento: {clima?.current?.wind?.speed}km/h</p>
          <p className="datos-extra">Precipitaciones: {clima?.current?.precipitation?.total}% </p>
        </>
      )}
    </>
  )
}

Portada.propTypes = {
  lugar: PropTypes.object.isRequired,
  clima: PropTypes.object.isRequired
};

export default Portada