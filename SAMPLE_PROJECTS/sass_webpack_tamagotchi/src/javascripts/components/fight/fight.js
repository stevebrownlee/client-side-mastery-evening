import util from '../../helpers/util';

import './fight.scss';

const strength = 99;

const getStrength = () => strength;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Fighting</h2>';
  domString += `<h3>Strength: ${getStrength()}</h3>`;
  domString += '<h4>Select action:</h4>';
  domString += '<button>Flee</button>';
  domString += '<button>Punch em</button>';
  util.printToDom('fight', domString);
};

export default { domStringBuilder, getStrength };
