import utilities from '../../helpers/utilities';

import './grid.scss';

const makeGrid = (rows = 1, columns = 1) => {
  let domString = '<table class="grid">';
  for (let r = 0; r < rows; r += 1) {
    domString += '<tr>';
    for (let c = 0; c < columns; c += 1) {
      domString += '<td></td>';
    }
    domString += '</tr>';
  }
  domString += '</table>';

  utilities.printToDom('grid', domString);
};

export default { makeGrid };
