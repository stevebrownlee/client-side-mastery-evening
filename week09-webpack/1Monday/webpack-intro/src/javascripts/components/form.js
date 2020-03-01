import utils from '../helpers/utils';
import textData from '../helpers/data/textData';
import display from './display';

const submitForm = (e) => {
  e.preventDefault();
  const formText = $('#text-box').val();
  textData.setText(formText);
  display.showDisplay();
  $('#text-box').val('');
};

const displayForm = () => {
  let domString = '';
  domString += '<form class="col-6 offset-3">';
  domString += '<div class="form-group">';
  domString += '<label for="text-box">Text</label>';
  domString += '<input type="text" class="form-control" id="text-box" placeholder="bla bla bla">';
  domString += '</div>';
  domString += '<button id="real-nice-form-button" type="submit" class="btn btn-primary">Submit</button>';
  domString += '</form>';

  utils.printToDom('form-container', domString);
  $('#real-nice-form-button').click(submitForm);
};

export default { displayForm };
