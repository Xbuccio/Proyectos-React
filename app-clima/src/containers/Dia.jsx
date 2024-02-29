import PropTypes from 'prop-types'
import TermometroBlanco from '../icons/termometro-blanco.png'; // Nueva imagen para color true
import VientoBlanco from '../icons/viento-blanco.png'; // Nueva imagen para color true
import IconoCorrecto from '../components/IconoCorrecto';
import Termometro from '../icons/termometro.png'
import Gota from '../icons/gota.png'
import Viento from '../icons/viento.png'
import RecortePalabra from '../components/RecortePalabra';
import { diasSemana } from '../components/ObtenerDia'

function Dia({ clima, diaNum, color }) {

  const climaDia = clima?.daily?.data[diaNum]

  const fecha = new Date(climaDia?.day);

  let numeroDiaSemana = (fecha.getDay() + 2) % 7;
  if (numeroDiaSemana === 0) {
    numeroDiaSemana = 7;
  }

  const nombreDiaSemana = diasSemana[numeroDiaSemana - 1];

  return (
    <div className='tarjeta-dia'>
      <div className='titulo-dia'>
        <RecortePalabra nombreDiaSemana={nombreDiaSemana} />
        <IconoCorrecto clima={clima} num={climaDia?.icon} />
      </div>
      <div className='dia-individual'>
        <div className='individual'>
          <span><img src={color ? TermometroBlanco : Termometro} className='iconos-dia' alt="" /></span>
          <p className='temp-dia'>{climaDia?.all_day?.temperature}°</p>
          <div className='min-max'>
            <p>{climaDia?.all_day?.temperature_min}°</p>
            <p>{climaDia?.all_day?.temperature_max}°</p>
          </div>
        </div>
        <div className='individual2'>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop:'0px'}}>
            <img src={Gota} className='iconos-dia' alt="" />
            <p>{climaDia?.all_day?.precipitation?.total} mm</p>
          </div>
          <div  style={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop:'-15px'}}>
            <img src={color ? VientoBlanco : Viento} className='iconos-dia' alt="" />
            <p>{climaDia?.all_day?.precipitation?.total} km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Dia.propTypes = {
  diaNum: PropTypes.number.isRequired,
  clima: PropTypes.object,
  color: PropTypes.bool
};

export default Dia