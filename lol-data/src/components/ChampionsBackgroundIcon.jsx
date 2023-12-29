import fighter from '../icons/fighter.png';
import mage from '../icons/mage.png';
import marksman from '../icons/range.png';
import tank from '../icons/tank.png';
import asessin from '../icons/asessin.png';
import sup from '../icons/sup.png';

const ChampionBackgroundIcons = ({ tag }) => {

  let correctBackIcon

  switch (tag) {
    case "Fighter":
      correctBackIcon = <img src={fighter} alt="Descripción de la imagen" className="background-f-habilities"/>
      break
    case "Mage":
      correctBackIcon = <img src={mage} alt="Descripción de la imagen" className="background-habilities"/>
      break
    case "Marksman":
      correctBackIcon = <img src={marksman} alt="Descripción de la imagen" className="background-habilities"/>
      break
    case "Support":
      correctBackIcon = <img src={sup} alt="Descripción de la imagen" className="background-habilities"/>
      break
    case "Assassin":
      correctBackIcon = <img src={asessin} alt="Descripción de la imagen" className="background-habilities"/>
      break
    case "Tank":
      correctBackIcon = <img src={tank} alt="Descripción de la imagen" className="background-habilities"/>
      break
  }

  return (
    <>
      {
        correctBackIcon 
      }
    </>
  )
}

export default ChampionBackgroundIcons