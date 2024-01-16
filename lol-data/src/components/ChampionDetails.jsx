import { useEffect, useState } from "react";
import { URL_CHAMPIONS_SKILL } from "../api/apiRest";
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import ChampionInfo from "./ChampionInfo";
import ChampionsHabilities from "./ChampionsHabilities";
import ChampionGalery from "./ChampionGalery"//
import "../styles/ChampionsDetails.css"


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
    <div className="container-details" >
      <ChampionInfo id={id} championSkills={championSkills} />
      <ChampionsHabilities id={id} championSkills={championSkills} />
      <ChampionGalery id={id} championSkills={championSkills}/>
    </div>
  );

};

ChampionDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChampionDetails;