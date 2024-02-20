import PropTypes from 'prop-types'
import '../styles/ClimaHora.css'
import Hora from './Hora'

function ClimaHora({ clima }) {

  const fechaCompleta = new Date(clima?.hourly?.data[0].date)

  const dia = fechaCompleta.getDate();
  const mes = fechaCompleta.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
  //const año = fechaCompleta.getFullYear();

  return (
    <div className="container-climahora">
      <h2>Lunes, {`${dia}/${mes}`}</h2>
      <div className='container-hora'>
        <div className='carrusel'>
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
  )
}

ClimaHora.propTypes = {
  clima: PropTypes.object.isRequired
};


export default ClimaHora