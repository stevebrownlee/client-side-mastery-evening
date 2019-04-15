import util from '../../helpers/util';

import './fight.scss';

const strength = 99;

const getStrength = () => strength;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Fighting</h2>';
  util.printToDom('fight', domString);
};

export default { domStringBuilder, getStrength };
