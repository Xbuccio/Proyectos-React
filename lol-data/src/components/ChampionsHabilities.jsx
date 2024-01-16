import PropTypes from 'prop-types';
import ChampionBackgroundIcons from "./ChampionsBackgroundIcon";
import { URL_CHAMPIONS_PASSIVE_IMG, URL_CHAMPIONS_SKILL_IMG } from "../api/apiRest"
import React, { useRef, useState } from 'react';
import "../styles/ChampionsHabilities.css"

const ChampionsHabilities = ({ championSkills, id }) => {

  const [skillSelect, setSkillSelect] = useState("P")

  const videoRefs = {
    P: useRef(null),
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    R: useRef(null),
  };

  if (!championSkills) {
    return null;
  }

  const championData = championSkills.data && championSkills.data[id];

  if (!championData) {
    return null;
  }

  const championKey = championData.key;



  const championHabilitieVideo = (ability) => {
    const keyLength = championKey.length;
    const prefix = keyLength === 3 ? '0' : keyLength === 2 ? '00' : '000';

    return (
      <source
        src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${prefix}${championKey}/ability_${prefix}${championKey}_${ability}1.webm`}
        type="video/webm"
      />
    );
  };

  return (
    <section className='container-habilities'>

      <ChampionBackgroundIcons tag={championData.tags[0]} />
      <div className='container-habilities-info' >
        <h2>Habilidades</h2>
        <ul >
          {championSkills && (
            <li key={championData.passive.id}>
              <img
                className={`img-habilitie ${skillSelect === "P" ? 'selected' : ''}`}
                src={`${URL_CHAMPIONS_PASSIVE_IMG}${championData.passive.image.full}`}
                alt="no se ve"
                onClick={() => setSkillSelect("P")}
              />
              <span className='a'></span>
              {skillSelect == "P" && (
                <div className='spells-info'>
                  <h6>PASIVA</h6>
                  <h4>{championData.passive.name}</h4>
                  <p dangerouslySetInnerHTML={{ __html: championData.passive.description }} />
                </div>
              )}
            </li>
          )}
          {championSkills && championData.spells.map((spell) => (
            <li key={spell.id}>
              <img
                className={`img-habilitie ${skillSelect === spell.id.charAt(spell.id.length - 1) ? 'selected' : ''}`}
                src={`${URL_CHAMPIONS_SKILL_IMG}${spell.image.full}`}
                alt="no se ve"
                name="spell"
                onClick={() => setSkillSelect(spell.id.charAt(spell.id.length - 1))}
              />
              <span className='a'></span>
              {skillSelect == spell.id.charAt(spell.id.length - 1) && (
                <div className='spells-info'>{console.log(spell.id.charAt(spell.id.length - 1))}
                  <h6>{spell.id.charAt(spell.id.length - 1)}</h6>
                  <h4>{spell.name}</h4>
                  <p dangerouslySetInnerHTML={{ __html: spell.description }} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='container-video'>
        {/* Aquí puedes agregar lógica para mostrar el video seleccionado */}
        {Object.keys(videoRefs).map((ability) => (
          <React.Fragment key={ability}>
            {skillSelect === ability && (
              <video
                ref={videoRefs[ability]}
                width="640"
                height="360"
                autoPlay
                muted
                loop
                playsInline
                className="custom-video"
              >
                {championHabilitieVideo(ability)}
              </video>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

ChampionsHabilities.propTypes = {
  championSkills: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChampionsHabilities