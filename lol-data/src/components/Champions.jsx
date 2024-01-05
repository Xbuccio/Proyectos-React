import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.png'
import back from '../icons/back.png'
import x from '../icons/x.png'
import { URL_CHAMPIONS, URL_CHAMPIONS_IMAGE } from '../api/apiRest';

import "../styles/Champions.css"

const Champions = () => {
  const [championData, setChampionData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [dificultFilter, setDificultFilter] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonOn, setButtonOn] = useState(false)
  const [difficult, setDifficult] = useState(false)

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

    // Aplicar filtros y búsqueda
    let filteredChampions = Object.values(championData.data);

    if (filters.length > 0) {
      filteredChampions = filteredChampions.filter(champion =>
        filters.includes(champion.tags[0]) // Suponiendo que el primer tag es suficiente para el filtro de rol
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
      <div className='container-barra'>
        <div className='container-buscador'>
          {!buttonOn &&
            <div onClick={() => setButtonOn(!buttonOn)} className='flex buscador-hover'>
              <img src={search} alt="" className='icon-search' />
              <p>buscar</p>
              <div className="vertical-line-1"></div>
            </div>
          }
          {buttonOn &&
            <div className='flex'>
              <img src={back} alt="" className='icon-search ' onClick={() => setButtonOn(!buttonOn)} />
              <input
                className='buscador'
                type="text"
                placeholder="buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="vertical-line-11"></div>
            </div>
          }
        </div>

        <div className='container-lista'>
          <ul className='lista-clases'>
            <li>
              <button className='boton-filtro' onClick={() => setFilters([])}>Todos</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Assassin'])}>Asesinos</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Fighter'])}>Luchador</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Mage'])}>Magos</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Marksman'])}>Tirador</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Support'])}>Support</button>
            </li>
            <li>
              <button className='boton-filtro' onClick={() => setFilters(['Tank'])}>Tanques</button>
            </li>
          </ul>
        </div>

        <div className='container-dificultad'>
          <div className={`vertical-line-2 ${difficult == true ? 'line-open' : ''}`} ></div>
          <details>
            <summary className='flex' onClick={() => setDifficult(!difficult)}>
              <img
                src={back}
                alt=""
                className={`${difficult ? 'icon-open' : 'icon-close'}`}
              />
              {dificultFilter.length === 0 ? (
                <span>Dificultades</span>
              ) : (
                <div className="selected-filters">
                  {dificultFilter.map((filter, index) => (
                    <div key={index} className="filter-container flex">
                      {filter >= 1 && filter <= 3 && (
                        <div className='flex button-dificult-select'>
                          <div className='paralelogramo lleno'></div>
                          <div className='paralelogramo'></div>
                          <div className='paralelogramo'></div>
                        </div>
                      )}
                      {filter === 4 && (
                        <div className='flex button-dificult-select'>
                          <div className='paralelogramo lleno'></div>
                          <div className='paralelogramo lleno'></div>
                          <div className='paralelogramo'></div>
                        </div>
                      )}
                      {filter === 5 && (
                        <div className='flex button-dificult-select'>
                          <div className='paralelogramo lleno'></div>
                          <div className='paralelogramo lleno'></div>
                          <div className='paralelogramo lleno'></div>
                        </div>
                      )}
                      <img
                        src={x}
                        alt=""
                        className='icon-x'
                        onClick={() => setDificultFilter([])}
                      />
                    </div>
                  ))}
                </div>
              )}
            </summary>
            <ul className='list-dificul'>
              <li>
                <button className='flex button-dificult' onClick={() => setDificultFilter([3])}>
                  <div className='paralelogramo lleno'></div>
                  <div className='paralelogramo'></div>
                  <div className='paralelogramo'></div>
                </button>
              </li>
              <li>
                <button className='flex button-dificult' onClick={() => setDificultFilter([4])}>
                  <div className='paralelogramo lleno'></div>
                  <div className='paralelogramo lleno'></div>
                  <div className='paralelogramo'></div>
                </button>
              </li>
              <li>
                <button className='flex button-dificult' onClick={() => setDificultFilter([5])}>
                  <div className='paralelogramo lleno'></div>
                  <div className='paralelogramo lleno'></div>
                  <div className='paralelogramo lleno'></div>
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div >

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
