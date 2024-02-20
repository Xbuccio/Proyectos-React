import IconoCorrecto from "../components/IconoCorrecto"
import PropTypes from 'prop-types';

function Hora({ clima, horaNum }) {

  const dataClima = clima?.hourly?.data[horaNum]
  const fecha = new Date(dataClima?.date);

  return (
    <div className="hora">
      <p className="hora-hora">{`${fecha.getHours()}:${fecha.getMinutes() < 10 ? '0' : ''}${fecha.getMinutes()}`}</p>
      {clima && (
        <div className="tarjeta-hora">
          <div className="tarjeta-hora-1">
            <IconoCorrecto clima={clima} num={dataClima?.icon} />
          </div>
          <div className="tarjeta-hora-2">
            <p>{dataClima?.temperature} °C</p>
            <p>{dataClima?.precipitation?.total} mm</p>
            <p>{dataClima?.wind?.speed}km/h</p>
          </div>
        </div>
      )}
    </div>
  )
}

Hora.propTypes = {
  horaNum: PropTypes.object.isRequired,
  clima: PropTypes.object.isRequired
};


export default Hora