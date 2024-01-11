import { useState } from "react"
import PropTypes from 'prop-types';
import search from '../icons/search.png'
import back from '../icons/back.png'
import x from '../icons/x.png'
import "../styles/ChampionsBarra.css"

const Barra = ({ setFilters, dificultFilter, setDificultFilter, searchTerm, setSearchTerm }) => {

  const [buttonOn, setButtonOn] = useState(false)
  const [difficult, setDifficult] = useState(false)

  return (
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
              <span className="span-dificult">Dificultades</span>
            ) : (
              <div className="selected-filters">
                {dificultFilter.map((filter, index) => (
                  <div key={index} className="filter-container flex">
                    {filter >= 1 && filter <= 3 && (
                      <div className='flex button-dificult-select'>
                        <div className='paralelogramo-2 lleno'></div>
                        <div className='paralelogramo-2'></div>
                        <div className='paralelogramo-2'></div>
                      </div>
                    )}
                    {filter === 4 && (
                      <div className='flex button-dificult-select'>
                        <div className='paralelogramo-2 lleno'></div>
                        <div className='paralelogramo-2 lleno'></div>
                        <div className='paralelogramo-2'></div>
                      </div>
                    )}
                    {filter === 5 && (
                      <div className='flex button-dificult-select'>
                        <div className='paralelogramo-2 lleno'></div>
                        <div className='paralelogramo-2 lleno'></div>
                        <div className='paralelogramo-2 lleno'></div>
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
  )
}

Barra.propTypes = {
  setFilters: PropTypes.func,
  dificultFilter: PropTypes.array,
  setDificultFilter: PropTypes.func,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default Barra