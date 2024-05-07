import { useEffect } from "react";
import ClimaDia from "../containers/Clima-dia";
import ClimaHora from "../containers/Clima-hora";
import Portada from "../containers/Portada";
import VideoFondo from "../components/VideoFondo";
import Loader from "../components/Loader";
import useLocation from "../hooks/useLocation";
import useWeatherData from "../hooks/useWeatherData.js";
import "../styles/Layout.css";

function Layout({ ajustesNav, ubicacion, setUbicacion }) {
  const lugar = useLocation();

  // Si ajustesNav está abierto, usa la ubicación proporcionada en los ajustes
  const ubicacionActual = ajustesNav ? ubicacion : lugar;

  const { clima, color } = useWeatherData(ubicacionActual);

  useEffect(() => {
    // Si la ubicación del usuario no está disponible, actualizamos la ubicación
    if (!lugar && !ubicacion && setUbicacion) {
      setUbicacion(null); // Esto puede ser cualquier valor predeterminado o un mensaje de error
    }
  }, [lugar, ubicacion, setUbicacion]);

  if (!clima || !ubicacionActual) {
    return <div className="contain-loader"><Loader/></div>;
  }

  return (
    <div className="layout">
      <VideoFondo clima={clima}/>
      <section className={`principal ${color ? 'letra-blanco' : 'letra-negro'}`}>
        <Portada lugar={ubicacionActual} clima={clima} />
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
