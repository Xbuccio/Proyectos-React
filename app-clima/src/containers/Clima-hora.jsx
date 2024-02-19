import '../styles/ClimaHora.css'
import Hora from './Hora'

function ClimaHora() {
  return (
    <div className="container-hora">
      <h2>Lunes, 19 de Febrero</h2>
      <p>Actualizado hace 4min</p>
      <div className='hora'>
        <Hora />
        <Hora />
        <Hora />
        <Hora />
        <Hora />
        <Hora />
        <Hora />
      </div>
    </div>
  )
}

export default ClimaHora