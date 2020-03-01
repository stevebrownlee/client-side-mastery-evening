import utils from '../../helpers/utils';
import houseData from '../../helpers/data/houseData';
import houseButton from '../houseButton/houseButton';

import './houseButtonGroup.scss';

const createHouseButtonGroup = () => {
  const houses = houseData.getHouses();
  let domString = '<div class="house-button-group">';
  houses.forEach((house) => {
    domString += houseButton.createHouseButton(house);
  });
  domString += '</div>';

  utils.printToDom('button-container', domString);
  $('body').on('click', '.house-button', houseButton.buttonEventFunction);
};

export default { createHouseButtonGroup };
