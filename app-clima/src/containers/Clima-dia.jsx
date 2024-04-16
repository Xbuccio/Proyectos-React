import PropTypes from 'prop-types'
import Dia from "./Dia"
import "../styles/ClimaDia.css"

function ClimaDia ({ clima, color }) {

  

  return (
    <div className="container-dia">
      <Dia clima={clima} diaNum={1} color={color}/>
      <Dia clima={clima} diaNum={2} color={color}/>
      <Dia clima={clima} diaNum={3} color={color}/>
      <Dia clima={clima} diaNum={4} color={color}/>
      <Dia clima={clima} diaNum={5} color={color}/>
    </div>
  )
}

ClimaDia.propTypes = {
  clima: PropTypes.object,
  color: PropTypes.bool
};


export default ClimaDia