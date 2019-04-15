import util from '../../helpers/util';

import './play.scss';

const fun = 100;

const getFun = () => fun;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Playing</h2>';
  domString += `<h3>Fun: ${getFun()}</h3>`;
  domString += '<h4>Select adventure:</h4>';
  domString += '<button>water slides</button>';
  domString += '<button>skipping</button>';
  util.printToDom('play', domString);
};

export default { domStringBuilder, getFun };
