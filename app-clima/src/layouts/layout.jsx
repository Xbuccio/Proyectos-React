import ClimaDia from "../containers/Clima-dia"
import ClimaHora from "../containers/Clima-hora"
import "../styles/Layout.css"

function Layout() {
  return (
    <div className="layout">
      <section className="principal">
        <h2 className="localidad">Gonzalez Catan, Buenos Aires</h2>
        <h1 className="temperatura">23 °C</h1>
        <p className="datos-extra">Despejado</p>
        <p className="datos-extra">Sensacion Termica: 25</p>
        <p className="datos-extra">Calidad del aire: Regular (21)</p>
      </section>
      <section className="segundo">
        <ClimaDia />
      </section>
      <section className="tercero">
        <ClimaHora />
      </section>
    </div>
  )
}

export default Layout