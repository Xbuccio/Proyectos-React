import TermometroBlanco from '../icons/termometro-blanco.png'; // Nueva imagen para color true
import VientoBlanco from '../icons/viento-blanco.png'; // Nueva imagen para color true
import IconoCorrecto from "../components/IconoCorrecto"
import Termometro from '../icons/termometro.png'
import Gota from '../icons/gota.png'
import Viento from '../icons/viento.png'
import PropTypes from 'prop-types';

function Hora({ clima, horaNum, color }) {

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
            <div className="tarjeta-flex">
              <img src={color ? TermometroBlanco : Termometro} className='iconos-dia-hora' alt="" />
              <p>{dataClima?.temperature} °C</p>
            </div>
            <div className="tarjeta-flex">
              <img src={Gota} className='iconos-dia-hora' alt="" />
              <p>{dataClima?.precipitation?.total} mm</p>
            </div>
            <div className="tarjeta-flex">
              <img src={color ? VientoBlanco : Viento} className='iconos-dia-hora' alt="" />
              <p>{dataClima?.wind?.speed}km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Hora.propTypes = {
  horaNum: PropTypes.number.isRequired,
  clima: PropTypes.object.isRequired,
  color: PropTypes.bool
};


export default Hora