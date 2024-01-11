import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_CHAMPIONS, URL_CHAMPIONS_IMAGE } from '../api/apiRest';
import Barra from './ChampionsBarra';
import "../styles/Champions.css"

const Champions = () => {
  const [championData, setChampionData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [dificultFilter, setDificultFilter] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

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

  const filterChampions = () => {
    if (!championData) return [];

    let filteredChampions = Object.values(championData.data);

    if (filters.length > 0) {
      filteredChampions = filteredChampions.filter(champion =>
        filters.includes(champion.tags[0]) 
      );
    }

    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');
      filteredChampions = filteredChampions.filter(champion =>
        regex.test(champion.name)
      );
    }

    if (dificultFilter.length > 0) {
      filteredChampions = filteredChampions.filter(champion =>
        dificultFilter.includes(champion.info.difficulty)
      );
    }

    return filteredChampions;
  };

  return (
    <>
      <h1>Campeones</h1>
      <Barra
        filters={filters}
        setFilters={setFilters}
        dificultFilter={dificultFilter}
        setDificultFilter={setDificultFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {
        championData ? (
          <span className='champions-grid' >

            {
              filterChampions().map((champion) => (
                <Link to={`/${champion.id}`} key={champion.id} className='a'>
                  <div className='champion-item'>
                    <div className='champion-img-container'>
                      <img src={URL_CHAMPIONS_IMAGE + champion.id + '_0.jpg'} alt="" className='champions-image' />
                    </div>
                    <h3>{champion.name.toUpperCase()}</h3>
                  </div>
                </Link>
              ))
            }

          </span >
        ) : (
          <p>Loading...</p>
        )}
    </>
  );

};

export default Champions;
