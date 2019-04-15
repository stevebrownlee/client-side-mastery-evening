import util from '../../helpers/util';

import './eat.scss';

const full = 100;

const getFull = () => full;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Eating</h2>';
  domString += `<h3>Fullness: ${getFull()}</h3>`;
  domString += '<h4>Select food to eat:</h4>';
  domString += '<button>Kale</button>';
  domString += '<button>Kandy</button>';
  util.printToDom('eat', domString);
};

export default { domStringBuilder, getFull };
