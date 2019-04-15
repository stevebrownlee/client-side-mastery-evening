import util from '../../helpers/util';

import './eat.scss';

const full = 100;

const getFull = () => full;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Eating</h2>';
  util.printToDom('eat', domString);
};

export default { domStringBuilder, getFull };
