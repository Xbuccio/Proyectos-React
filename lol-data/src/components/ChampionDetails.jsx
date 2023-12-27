import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { URL_CHAMPIONS_SKILL, URL_CHAMPIONS_PASSIVE_IMG, URL_CHAMPIONS_SKILL_IMG } from "../api/apiRest";

const ChampionDetails = ({ championID }) => {
  const [championSkills, setChampionSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL_CHAMPIONS_SKILL}${championID}.json`);
        console.log(championID)

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
  }, [championID]);

  return (
    <div>
      <h2>Pasiva</h2>
      <ul>
        {championSkills && championSkills.data[championID] && championSkills.data[championID].passive && championSkills.data[championID].passive.image &&(
          <li key={championSkills.data[championID].passive.id}>
            <img 
              src={`${URL_CHAMPIONS_PASSIVE_IMG}${championSkills.data[championID].passive.image.full}`}
              alt="no se ve"
            />
            <h4>{championSkills.data[championID].passive.name}</h4>
            <p>{championSkills.data[championID].passive.description}</p>
          </li>
        )}
      </ul>

      <h2>Habilidades</h2>
      <ul>
        {championSkills && championSkills.data[championID] && championSkills.data[championID].spells.map((spell) => (
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
    </div>
  );
};

ChampionDetails.propTypes = {
  championID: PropTypes.string.isRequired,
};

export default ChampionDetails;