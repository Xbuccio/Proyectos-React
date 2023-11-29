import { Banner } from "../components/banner"
import "../styles/Wrapper.css"

function Wrapper({ es }) {
  return (
    <section className="wrapper">
      <div className="cols cols0">
        <span className="topline barra">{es === 'B' ? 'Hola' : 'Hello'}</span>
        <h1 className='cols-titulo'>
          <span className='im'>
            {es === 'B' ? 'Soy' : 'Im'}
          </span>
          <Banner />
        </h1>
        <p>{es === 'B' ? 'Ingeniero de Software' : 'Software Engineer'}</p>
      </div>
    </section>
  )
}

export default Wrapper