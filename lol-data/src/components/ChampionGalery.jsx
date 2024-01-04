import PropTypes from 'prop-types';
import '../styles/ChampionGalery.css'; // Asegúrate de importar tus estilos
import { URL_CHAMPIONS_SPLASH } from '../api/apiRest';
import { useState } from 'react';

// ... (importaciones)

const ChampionGalery = ({ championSkills, id }) => {

  const [background, setBackground] = useState(0)
  
  if (!championSkills) {
    return <p>Cargando...</p>;
  }

  const championGalery = championSkills.data[id];



  return (
    <section className='galery-section' style={{ backgroundImage: `url(${URL_CHAMPIONS_SPLASH}${championGalery.id}_${background}.jpg)` }}>
      <div className='skins-carousel'>
        <h2>Aspectos Disponibles</h2>
        <hr />
        <hr style={{opacity:0}}/>
        <div className='skins-carousel-div'>
          <ul className='skins-button-container'>
            {championGalery && championGalery.skins.map((skin) => (
              <li key={skin.id}>
                <button className='button-carousel' onClick={() => setBackground(skin.num)}>
                  <img 
                    src={`${URL_CHAMPIONS_SPLASH}${championGalery.id}_${skin.num}.jpg`} alt="" className='img-carousel' 
                  />
                  <p>{skin.name.toUpperCase()}</p>
                </button>
              </li>
            ))}
              <hr style={{opacity:0}} />
              <hr style={{opacity:0}} />
          </ul>
        </div>
      </div>
    </section>
  );
};

ChampionGalery.propTypes = {
  championSkills: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChampionGalery;


