import PropTypes from 'prop-types';
import LuchadorIcon from '../icons/luchador.svg';
import { URL_CHAMPIONS_SPLASH } from "../api/apiRest";
import "../styles/ChampionsDetails.css";

const ChampionInfo = ({ championSkills, id }) => {
  if (!championSkills) {
    return <p>Loading...</p>; // O cualquier otro indicador de carga
  }

  const championInfo = championSkills.data[id];

  return (
    <div>
      {championSkills && (
        <div>
          <div className="space"></div>
          <div className="container-splash-inicio">
            <img src={`${URL_CHAMPIONS_SPLASH}${championInfo.id}_0.jpg`} alt="" className="splash-inicio" />
          </div>
          <div className="container-resume">
            <h2 className="details-title">{championInfo.title.toUpperCase()}</h2>
            <h1 className="details-name">{championInfo.name.toUpperCase()}</h1>
            <div className="container-info">
              <div className="container-stats">
                <p>
                  {championInfo.tags[0]}
                  <img src={LuchadorIcon} alt="Luchador Icon" />
                </p>
                <ul>
                  <li>{championInfo.info.attack}</li>
                  <li>{championInfo.info.defense}</li>
                  <li>{championInfo.info.magic}</li>
                  <li>{championInfo.info.difficulty}</li>
                </ul>
                <p></p>
              </div>
              <hr />
              <div className="container-lore">
                <p>{championInfo.blurb}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ChampionInfo.propTypes = {
  championSkills: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChampionInfo;