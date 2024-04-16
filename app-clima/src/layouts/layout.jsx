import ClimaDia from "../containers/Clima-dia";
import ClimaHora from "../containers/Clima-hora";
import Portada from "../containers/Portada";
import VideoFondo from "../components/VideoFondo";
import Loader from "../components/Loader";
import useLocation from "../hooks/useLocation";
import useWeatherData from "../hooks/useWeatherData.js";
import "../styles/Layout.css";

function Layout() {
  const lugar = useLocation();
  const { clima, color } = useWeatherData(lugar);

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
  );
}

export default Layout;
