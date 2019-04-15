import util from '../../helpers/util';

import './sleep.scss';

const energy = 100;

const getEnergy = () => energy;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Sleeping</h2>';
  domString += `<h3>Energy: ${getEnergy()}</h3>`;
  domString += '<h4>Select duration:</h4>';
  domString += '<button>Cat nap</button>';
  domString += '<button>DEEP slumber</button>';
  util.printToDom('sleep', domString);
};

export default { domStringBuilder, getEnergy };
