import PropTypes from 'prop-types';
import uno from '../icons/set03/medium/1.png';
import dos from '../icons/set03/medium/2.png';
import tres from '../icons/set03/medium/3.png';
import cuatro from '../icons/set03/medium/4.png';
import cinco from '../icons/set03/medium/5.png';
import seis from '../icons/set03/medium/6.png';
import siete from '../icons/set03/medium/7.png';
import ocho from '../icons/set03/medium/8.png';
import nueve from '../icons/set03/medium/9.png';
import diez from '../icons/set03/medium/10.png';
import once from '../icons/set03/medium/11.png';
import doce from '../icons/set03/medium/12.png';
import trece from '../icons/set03/medium/13.png';
import catorce from '../icons/set03/medium/14.png';
import quince from '../icons/set03/medium/15.png';
import dieciseis from '../icons/set03/medium/16.png';
import diecisiete from '../icons/set03/medium/17.png';
import dieciocho from '../icons/set03/medium/18.png';
import diecinueve from '../icons/set03/medium/19.png';
import veinte from '../icons/set03/medium/20.png';
import veintiuno from '../icons/set03/medium/21.png';
import veintidos from '../icons/set03/medium/22.png';
import veintitres from '../icons/set03/medium/23.png';
import veinticuatro from '../icons/set03/medium/24.png';
import veinticinco from '../icons/set03/medium/25.png';
import veintiseis from '../icons/set03/medium/26.png';
import veintisiete from '../icons/set03/medium/27.png';
import veintiocho from '../icons/set03/medium/28.png';
import veintinueve from '../icons/set03/medium/29.png';
import treinta from '../icons/set03/medium/30.png';
import treintayuno from '../icons/set03/medium/31.png';
import treintaydos from '../icons/set03/medium/32.png';
import treintaytres from '../icons/set03/medium/33.png';
import treintaycuatro from '../icons/set03/medium/34.png';
import treintaycinco from '../icons/set03/medium/35.png';
import treintayseis from '../icons/set03/medium/36.png';

function IconoCorrecto({ clima, num }) {

  let iconSrc;

  switch (num) {
    case 1:
      iconSrc = uno;
      break;
    case 2:
      iconSrc = dos;
      break;
    case 3:
      iconSrc = tres;
      break;
    case 4:
      iconSrc = cuatro;
      break;
    case 5:
      iconSrc = cinco;
      break;
    case 6:
      iconSrc = seis;
      break;
    case 7:
      iconSrc = siete;
      break;
    case 8:
      iconSrc = ocho;
      break;
    case 9:
      iconSrc = nueve;
      break;
    case 10:
      iconSrc = diez;
      break;
    case 11:
      iconSrc = once;
      break;
    case 12:
      iconSrc = doce;
      break;
    case 13:
      iconSrc = trece;
      break;
    case 14:
      iconSrc = catorce;
      break;
    case 15:
      iconSrc = quince;
      break;
    case 16:
      iconSrc = dieciseis;
      break;
    case 17:
      iconSrc = diecisiete;
      break;
    case 18:
      iconSrc = dieciocho;
      break;
    case 19:
      iconSrc = diecinueve;
      break;
    case 20:
      iconSrc = veinte;
      break;
    case 21:
      iconSrc = veintiuno;
      break;
    case 22:
      iconSrc = veintidos;
      break;
    case 23:
      iconSrc = veintitres;
      break;
    case 24:
      iconSrc = veinticuatro;
      break;
    case 25:
      iconSrc = veinticinco;
      break;
    case 26:
      iconSrc = veintiseis;
      break;
    case 27:
      iconSrc = veintisiete;
      break;
    case 28:
      iconSrc = veintiocho;
      break;
    case 29:
      iconSrc = veintinueve;
      break;
    case 30:
      iconSrc = treinta;
      break;
    case 31:
      iconSrc = treintayuno;
      break;
    case 32:
      iconSrc = treintaydos;
      break;
    case 33:
      iconSrc = treintaytres;
      break;
    case 34:
      iconSrc = treintaycuatro;
      break;
    case 35:
      iconSrc = treintaycinco;
      break;
    case 36:
      iconSrc = treintayseis;
      break;
    default:
      iconSrc = null;
  }

  return (
    <>
      {clima && (
        <img src={iconSrc} alt="" />
      )}
    </>
  );

}

IconoCorrecto.propTypes = {
  clima: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired
};

export default IconoCorrecto