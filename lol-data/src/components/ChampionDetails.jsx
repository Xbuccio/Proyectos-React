import { useEffect, useState } from "react";
import { URL_CHAMPIONS_SKILL, URL_CHAMPIONS_SKILL_IMG, URL_CHAMPIONS_PASSIVE_IMG } from "../api/apiRest";

const ChampionDetails = ({ championName }) => {
  const [championSkills, setChampionSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos del campeón
        const response = await fetch(`${URL_CHAMPIONS_SKILL}${championName}.json`);

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
  }, [championName]);

  return (
    <div>
      {championSkills && championSkills.data[championName] && (
        <h1>
          <img
            src={`${URL_CHAMPIONS_PASSIVE_IMG}${championName}_P.png`}
            alt={`${championName} passive`}
            style={{ marginRight: '10px' }}
          />
          {championName}
        </h1>
      )}

      <h2>Pasiva</h2>
      <ul>
        {championSkills && championSkills.data[championName] && championSkills.data[championName].passive && (
          <li key={championSkills.data[championName].passive.id}>
            <h4>{championSkills.data[championName].passive.name}</h4>
            <p>{championSkills.data[championName].passive.description}</p>
          </li>
        )}
      </ul>

      <h2>Habilidades</h2>
      <ul>
        {championSkills && championSkills.data[championName] && championSkills.data[championName].spells.map((spell) => (
          <li key={spell.id}>
            <img
              src={`${URL_CHAMPIONS_PASSIVE_IMG}${championName}_P.png`}
              alt={`${championName} passive`}
              style={{ marginRight: '10px' }}
            />
            <h4>{spell.name}</h4>
            <p>{spell.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ChampionDetails;
