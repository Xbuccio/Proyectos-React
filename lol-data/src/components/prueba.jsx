import { useEffect, useState } from 'react';
import { URL_CHAMPIONS, URL_CHAMPIONS_IMAGE } from '../api/apiRest';
import ChampionDetails from './ChampionDetails'; // Asegúrate de tener la ruta correcta

const Prueba = () => {
  const [championData, setChampionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_CHAMPIONS);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setChampionData(data);

      } catch (error) {
        console.error('Error fetching champion data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Champion Data</h1>
      {championData ? (
        <ul>
          {Object.values(championData.data).slice(0, 10).map((champion) => (
            <li key={champion.id}>
              <h3>{champion.name}</h3>
              <p>{champion.title}</p>
              <img src={URL_CHAMPIONS_IMAGE + champion.name + '_0.jpg'} alt="" />
              <ChampionDetails championName={champion.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Prueba;
