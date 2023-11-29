import { useState } from "react"
import Navegador from "./containers/nav"
import Wrapper from "./containers/Wrapper"
import "./styles/Main.css"
import About_Me from "./containers/About_me"

function Portfolio() {
  const [es, na] = useState(null)
  const [color1, color2] = useState(null)

  const cambiarIdiomaEs = () => {
    na('A')
  }

  const cambiarIdiomaNa = () => {
    na('B')
  }

  const cambiarColor1 = () => {
    color2('1')
  }

  const cambiarColor2 = () => {
    color2('2')
  }

  return (
    <>
      <main className={color1 === '2' ? "container" : "container2"}>
        
        <Navegador es={es}/>

        <Wrapper es={es} />

        <About_Me es={es} />

      </main>
    </>
  );
}

export default Portfolio;
