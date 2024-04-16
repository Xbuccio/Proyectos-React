import { useEffect, useState } from "react"
import ClimaDia from "../containers/Clima-dia"
import ClimaHora from "../containers/Clima-hora"
import Portada from "../containers/Portada"
import "../styles/Layout.css"
import VideoFondo from "../components/VideoFondo"
import Loader from "../components/Loader"


const APIKEY = "9pkepgi0tyko1024n23zab5b2c2iepyfwhpcafke"
const API = "https://www.meteosource.com/api/v1/free/"

function Layout() {

  const [lugar, setLugar] = useState(null);
  const [clima, setClima] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLugar = await fetch(
          `${API}find_places_prefix?text=gonzalezcatan&language=en&key=${APIKEY}`
        );
        const dataLugar = await responseLugar.json();
        setLugar(dataLugar[0]);

        const responseClima = await fetch(
          `${API}point?place_id=${dataLugar[0]?.place_id}&sections=all&timezone=UTC&language=en&units=metric&key=${APIKEY}`
        );
        const dataClima = await responseClima.json();
        setClima(dataClima);

        // Determinar el color del texto
        const climafondo = dataClima?.daily?.data[0]?.icon;
        setColor(
          climafondo === 2 ||
          climafondo === 26 ||
          climafondo === 13 ||
          climafondo === 15 ||
          climafondo === 27 ||
          climafondo === 28 ||
          climafondo === 29 ||
          climafondo === 30 ||
          climafondo === 31 ||
          climafondo === 34 ||
          climafondo === 35 ||
          climafondo === 36 ||
          climafondo === 9 ||
          climafondo === 10 ||
          climafondo === 11 ||
          climafondo === 12
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!clima) {
    return <div className="contain-loader"><Loader/></div>;
  }

  return (
    <div className="layout">
      <VideoFondo clima={clima}/>
      <section className={`principal ${color ? 'letra-blanco' : 'letra-negro'}`}>
        <Portada lugar={lugar} clima={clima} />
      </section>
      <section className="segundo">
        <ClimaDia clima={clima} color={color} />
      </section>
      <section className="tercero">
        <ClimaHora clima={clima} color={color} />
      </section>
    </div>
  )
}

export default Layout