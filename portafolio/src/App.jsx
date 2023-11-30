import { useState } from "react"
import { Icon } from '@iconify/react';
import downOutlineIcon from '@iconify-icons/teenyicons/down-outline';
import Navegador from "./containers/nav"
import Wrapper from "./containers/Wrapper"
import About_Me from "./containers/About_me"
import Projects from "./containers/Projects";
import "./styles/Main.css"

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

        <div className="downOutline">
          <Icon id="downOutline1" icon={downOutlineIcon} height={50}/>
          <Icon id="downOutline2" icon={downOutlineIcon} height={50}/>
        </div>
        
        <About_Me es={es} />

        <Projects />

      </main>
    </>
  );
}

export default Portfolio;
