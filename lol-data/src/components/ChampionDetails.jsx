import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import { URL_CHAMPIONS_SKILL, URL_CHAMPIONS_PASSIVE_IMG, URL_CHAMPIONS_SKILL_IMG } from "../api/apiRest";
import "../styles/ChampionsDetails.css"
import ChampionInfo from "./ChampionInfo";

const ChampionDetails = () => {

  const { id } = useParams()
  const [championSkills, setChampionSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL_CHAMPIONS_SKILL}${id}.json`);

        if (!response.ok) {
          throw new Error('Habilidades no disponibles');
        }

        const skillsData = await response.json();
        setChampionSkills(skillsData);

      } catch (error) {
        console.error('Error fetching champion skills data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container-details">
      <ChampionInfo championSkills={championSkills} id={id} />

      <section>
        <h2>Pasiva</h2>
        <ul>
          {championSkills && (
            <li key={championSkills.data[id].passive.id}>
              <img
                src={`${URL_CHAMPIONS_PASSIVE_IMG}${championSkills.data[id].passive.image.full}`}
                alt="no se ve"
              />
              <h4>{championSkills.data[id].passive.name}</h4>
              <p>{championSkills.data[id].passive.description}</p>
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          {championSkills && championSkills.data[id].spells.map((spell) => (
            <li key={spell.id}>
              <img
                src={`${URL_CHAMPIONS_SKILL_IMG}${spell.image.full}`}
                alt="no se ve"
              />
              <h4>{spell.name}</h4>
              <p>{spell.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

};

ChampionDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChampionDetails;