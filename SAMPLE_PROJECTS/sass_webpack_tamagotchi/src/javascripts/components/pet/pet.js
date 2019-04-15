import util from '../../helpers/util';
import petImg from '../../../assets/dino.jpg';

import './pet.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += `<img src=${petImg}/>`;
  util.printToDom('pet', domString);
};

export default { domStringBuilder };
