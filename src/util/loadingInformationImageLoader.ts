import heimlichManeuverAdult from '../assets/loadingInformationImage/heimlichManeuverAdult.png';
import heimlichManeuverChild from '../assets/loadingInformationImage/heimlichManeuverChild.png';
import ambulanceFront from '../assets/loadingInformationImage/ambulanceFront.png';
import ambulanceSirenLight from '../assets/loadingInformationImage/ambulanceSirenLight.png';
import emerContactNumber from '../assets/loadingInformationImage/emerContactNumber.jpg';

const loadingInformationImageLoader = (randomNumber: number) => {
  switch (randomNumber) {
    case 0:
      return heimlichManeuverAdult;
    case 1:
      return heimlichManeuverChild;
    case 2:
      return ambulanceFront;
    case 3:
      return ambulanceSirenLight;
    case 4:
      return emerContactNumber;
    default:
      return null;
  }
};

export default loadingInformationImageLoader;
