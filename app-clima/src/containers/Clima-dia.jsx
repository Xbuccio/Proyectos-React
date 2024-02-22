import PropTypes from 'prop-types'
import Dia from "./Dia"
import "../styles/ClimaDia.css"

function ClimaDia ({ clima }) {

  if (!clima) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container-dia">
      <Dia clima={clima} diaNum={1} />
      <Dia clima={clima} diaNum={2} />
      <Dia clima={clima} diaNum={3} />
      <Dia clima={clima} diaNum={4} />
      <Dia clima={clima} diaNum={5} />

       {/*      <Dia clima={clima} diaNum={6} />**/}
    </div>
  )
}

ClimaDia.propTypes = {
  clima: PropTypes.object
};


export default ClimaDia