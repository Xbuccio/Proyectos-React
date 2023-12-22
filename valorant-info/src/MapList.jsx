// MapList.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const MapList = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://latam.api.riotgames.com/val/content/v1/contents',
          {
            params: {
              locale: 'es-MX',
              api_key: 'RGAPI-ce1cdcba-8b70-4959-962b-6adb4cf0ad4c',
            },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          const mapList = data.maps || []; // Asegúrate de ajustar según la respuesta real

          setMaps(mapList);
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Mapas</h1>
      <ul>
        {maps.map((map) => (
          <li key={map.name}>
            <strong>{map.name}</strong>
            <p>{map.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapList;
