import fighter from '../icons/fighter.png';
import mage from '../icons/mage.png';
import marksman from '../icons/range.png';
import tank from '../icons/tank.png';
import asessin from '../icons/asessin.png';
import sup from '../icons/sup.png';

const ChampionIcons = ({ tag }) => {

  let correctIcon

  switch (tag) {
    case "Fighter":
      correctIcon = <img src={fighter} alt="Descripción de la imagen" className='icon-f-info'/>
      break
    case "Mage":
      correctIcon = <img src={mage} alt="Descripción de la imagen" className='icon-champ-info'/>
      break
    case "Marksman":
      correctIcon = <img src={marksman} alt="Descripción de la imagen" className='icon-champ-info'/>
      break
    case "Support":
      correctIcon = <img src={sup} alt="Descripción de la imagen" className='icon-champ-info'/>
      break
    case "Assassin":
      correctIcon = <img src={asessin} alt="Descripción de la imagen" className='icon-champ-info'/>
      break
    case "Tank":
      correctIcon = <img src={tank} alt="Descripción de la imagen" className='icon-champ-info'/>
      break
  }

  return (
    <>
      {
        correctIcon 
      }
    </>
  )
}

export default ChampionIcons
