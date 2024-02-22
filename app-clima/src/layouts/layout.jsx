import { useEffect, useState } from "react"
import ClimaDia from "../containers/Clima-dia"
import ClimaHora from "../containers/Clima-hora"
import Portada from "../containers/Portada"
import "../styles/Layout.css"
import VideoFondo from "../components/VideoFondo"


const APIKEY = "9pkepgi0tyko1024n23zab5b2c2iepyfwhpcafke"
const API = "https://www.meteosource.com/api/v1/free/"

function Layout() {

  const [lugar, setLugar] = useState(null);
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLugar = await fetch(`${API}find_places_prefix?text=gonzalezcatan&language=en&key=${APIKEY}`);
        const dataLugar = await responseLugar.json();
        setLugar(dataLugar[0]); 


        const responseClima = await fetch(`${API}point?place_id=${dataLugar[0]?.place_id}&sections=all&timezone=UTC&language=en&units=metric&key=${APIKEY}`);
        const dataClima = await responseClima.json();
        setClima(dataClima);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="layout">
      <VideoFondo clima={clima}/>
      <section className="principal">
        <Portada lugar={lugar} clima={clima} />
      </section>
      <section className="segundo">
        <ClimaDia clima={clima} />
      </section>
      <section className="tercero">
        <ClimaHora clima={clima} />
      </section>
    </div>
  )
}

export default Layout