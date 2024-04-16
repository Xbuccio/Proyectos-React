import { useEffect, useState } from 'react';

const APIKEY = "9pkepgi0tyko1024n23zab5b2c2iepyfwhpcafke";
const API = "https://www.meteosource.com/api/v1/free/";

function useWeatherData(lugar) {
  const [clima, setClima] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!lugar) return;

      try {
        const responseClima = await fetch(
          `${API}point?place_id=${lugar?.place_id}&sections=all&timezone=UTC&language=en&units=metric&key=${APIKEY}`
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
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [lugar]);

  return { clima, color };
}

export default useWeatherData;
