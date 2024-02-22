import PropTypes from 'prop-types'
import IconoCorrecto from '../components/IconoCorrecto';

const diasSemana = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];

function Dia({ clima, diaNum }) {

  const climaDia = clima?.daily?.data[diaNum]

  const fecha = new Date(climaDia?.day);

  let numeroDiaSemana = (fecha.getDay() + 2) % 7;
  if (numeroDiaSemana === 0) {
    numeroDiaSemana = 7;
  }

  const nombreDiaSemana = diasSemana[numeroDiaSemana - 1];

  return (
    <>
      <p>{nombreDiaSemana}</p>
      <p>{climaDia?.all_day?.temperature}</p>
      <p>{climaDia?.all_day?.temperature_min}</p>
      <p>{climaDia?.all_day?.temperature_max}</p>
      <IconoCorrecto clima={clima} num={climaDia?.icon} />
      <p>{climaDia?.summary}</p>
    </>
  )
}

Dia.propTypes = {
  diaNum: PropTypes.object.isRequired,
  clima: PropTypes.object.isRequired
};

export default Dia