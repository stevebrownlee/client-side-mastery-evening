import utilities from '../../helpers/utilities';
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

  utilities.printToDom('button-container', domString);
};

export default { createHouseButtonGroup };
