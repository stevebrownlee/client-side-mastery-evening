import util from '../../helpers/util';

import './sleep.scss';

const energy = 100;

const getEnergy = () => energy;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Sleeping</h2>';
  util.printToDom('sleep', domString);
};

export default { domStringBuilder, getEnergy };
