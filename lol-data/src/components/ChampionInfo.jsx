import { URL_CHAMPIONS_SPLASH } from "../api/apiRest";
import ChampionIcons from './ChampionsIcons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import "../styles/ChampionsInfo.css";

const ChampionInfo = ({ championSkills, id }) => {

  const [more, setMore] = useState(true)

  if (!championSkills) {
    return <p>Loading...</p>;
  }

  const championInfo = championSkills.data[id];

  const handleClick = () => {
    setMore(!more)
  }

  return (
    <>
      {championSkills && (
        <>
          <div className="space"></div>
          <section>
            <picture className="container-splash-inicio">
              <img src={`${URL_CHAMPIONS_SPLASH}${championInfo.id}_0.jpg`} alt="" className="splash-inicio" />
            </picture>
          </section>
          <section className="container-resume">
            <h2 className="details-title">{championInfo.title.toUpperCase()}</h2>
            <h1 className="details-name">{championInfo.name.toUpperCase()}</h1>
            <div className="container-info">
              <div className="container-stats">
                <p>
                  <span className='container-icons'><ChampionIcons tag={championInfo.tags[0]} /></span>
                  {championInfo.tags[0]}<span /> {championInfo.tags[1]}
                </p>
              </div>
              <hr />
              <div className="container-lore">
                {more && (
                  <>
                    <p>{championInfo.blurb}
                      <button onClick={handleClick} className='button-more'>Ver Más </button>
                    </p>
                  </>
                )}
                {!more && (
                  <>
                    <p>{championInfo.lore}
                      <button onClick={handleClick} className='button-more'>Ver Menos </button>
                    </p>
                  </>
                )}
              </div>
              <hr />
              <div className="container-stats2">
                <ul>
                  <li>
                    Attack: <span className='stats-span'>{championInfo.info.attack}</span>
                  </li>
                  <li>
                    Defense: <span className='stats-span'>{championInfo.info.defense}</span>
                  </li>
                  <li>
                    Magic: <span className='stats-span'>{championInfo.info.magic}</span>
                  </li>
                  <li>
                    Difficulty: <span className='stats-span'>{championInfo.info.difficulty}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

ChampionInfo.propTypes = {
  championSkills: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChampionInfo;