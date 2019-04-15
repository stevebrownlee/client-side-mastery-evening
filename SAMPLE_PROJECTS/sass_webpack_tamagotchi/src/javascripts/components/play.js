import util from '../helpers/util';

import '../../styles/components/play.scss';

const fun = 100;

const getFun = () => fun;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Playing</h2>';
  util.printToDom('play', domString);
};

export default { domStringBuilder, getFun };
