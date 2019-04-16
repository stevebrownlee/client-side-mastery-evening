import util from '../../helpers/util';

import './play.scss';

let fun = 100;

const getFun = () => fun;

const setFun = (amount) => {
  fun += amount;
  if (fun > 100) {
    fun = 100;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Playing</h2>';
  domString += `<h3>Fun: ${getFun()}</h3>`;
  domString += '<h4>Select adventure:</h4>';
  domString += '<button id="slides">water slides</button>';
  domString += '<button id="skip">skipping</button>';
  util.printToDom('play', domString);
  document.getElementById('slides').addEventListener('click', () => {
    setFun(50);
    domStringBuilder();
  });
  document.getElementById('skip').addEventListener('click', () => {
    setFun(2);
    domStringBuilder();
  });
};

export default { domStringBuilder, getFun };
