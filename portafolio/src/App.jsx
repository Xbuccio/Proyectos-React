import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';
import downOutlineIcon from '@iconify-icons/teenyicons/down-outline';
import Navegador from "./containers/Nav"
import Wrapper from "./containers/Wrapper"
import About_Me from "./containers/About_me"
import Projects from "./containers/Projects";
import BackgroundContext from "./components/BackgroundContext";
import "./styles/Main.css"

function Portfolio() {
  const [tematic, setTematic] = useState(false)

  const cambiarTema = () => {
    setTematic((prevTematic) => !prevTematic);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", tematic);
    document.body.classList.toggle("dark-theme", tematic);
  }, [tematic]);
  

  return (
    <BackgroundContext.Provider value={{ tematic, cambiarTema }}>
      <main className="container">
        
        <Navegador />

        <Wrapper  />

        <div className="downOutline">
          <Icon id="downOutline1" icon={downOutlineIcon} height={50}/>
          <Icon id="downOutline2" icon={downOutlineIcon} height={50}/>
        </div>
        
        <About_Me  />

        <Projects />

      </main>
    </BackgroundContext.Provider>
  );
}

export default Portfolio;
