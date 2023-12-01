import { useContext } from "react";
import { Banner } from "../components/banner"
import LanguageContext from "../components/LanguageContext";
import "../styles/Wrapper.css"

function Wrapper() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="wrapper">
      <div className="cols cols0">
        <span className="topline barra">{language ? 'Hola' : 'Hello'}</span>
        <h1 className='cols-titulo'>
          <span className='im'>
            {language ? 'Soy' : 'Im'}
          </span>
          <Banner />
        </h1>
        <p>{language ? 'Ingeniero de Software' : 'Software Engineer'}</p>
      </div>
    </section>
  )
}

export default Wrapper