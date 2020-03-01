import util from '../helpers/util.js';
import breadData from '../helpers/data/breadData.js';
import sandwhich from './sandwich.js'

const selectBread = (e) => {
  const breadId = e.target.id;
  breadData.setSelectedBread(breadId);
  sandwhich.sandwichMaker();
}

const radioButtonEvent = (e) => {
  const radioButtons = document.getElementsByClassName('breadRadio');
  for(let i=0; i<radioButtons.length; i++){
    radioButtons[i].addEventListener('click', selectBread);
  }
}

const makeBreadRadioButtons = () => {
  const allBreads = breadData.getBreads();
  let domString = '';

  allBreads.forEach((bread) => {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input breadRadio" type="radio" name="exampleRadios" id="${bread.id}">`;
    domString += `<label class="form-check-label" for="${bread.id}">${bread.type}</label>`;
    domString += '</div>';
  });
  util.printToDom('bread-container', domString);
  radioButtonEvent();
}

export default { makeBreadRadioButtons };
