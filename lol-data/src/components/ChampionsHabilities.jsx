import PropTypes from 'prop-types';
import ChampionBackgroundIcons from "./ChampionsBackgroundIcon";

import { URL_CHAMPIONS_PASSIVE_IMG, URL_CHAMPIONS_SKILL_IMG } from "../api/apiRest"
import "../styles/ChampionsHabilities.css"
import { useEffect, useRef, useState } from 'react';

const ChampionsHabilities = ({ championSkills, id }) => {

  const videoRef = useRef(null);

  if (!championSkills) {
    return null;
  }

  const championData = championSkills.data && championSkills.data[id];

  if (!championData) {
    return null;
  }

  const championKey = championData.key;

  return (
    <section className='container-habilities'>

      <ChampionBackgroundIcons tag={championData.tags[0]} />
      <div className='container-habilities-info'>
        <h2>Habilidades</h2>
        <ul >
          {championSkills && (
            <li key={championData.passive.id}>
              <img className='img-habilitie'
                src={`${URL_CHAMPIONS_PASSIVE_IMG}${championData.passive.image.full}`}
                alt="no se ve"
              />
              {/**
              <h4>{championData.passive.name}</h4>
              <p>{championData.passive.description}</p> */}
            </li>
          )}
          {championSkills && championData.spells.map((spell) => (
            <li key={spell.id}>
              <img className='img-habilitie'
                src={`${URL_CHAMPIONS_SKILL_IMG}${spell.image.full}`}
                alt="no se ve"
              />
              {/** 
              <h4>{spell.name}</h4>
              <p>{spell.description}</p>*/}
            </li>
          ))}
        </ul>
      </div>

      <div className='container-video'>
        <video ref={videoRef} width="640" height="360" autoPlay muted loop playsInline className='custom-video'>
          <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${championKey}/ability_0${championKey}_Q1.webm`} type="video/webm" />
          {console.log(`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${championKey}/ability_0${championKey}_Q1.webm`)}
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  )
}

ChampionsHabilities.propTypes = {
  championSkills: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChampionsHabilities