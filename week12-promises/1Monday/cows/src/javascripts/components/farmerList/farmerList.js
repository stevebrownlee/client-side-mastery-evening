import farmerData from '../../helpers/data/farmers';
import utilities from '../../helpers/utilities';

import './farmerList.scss';
import farmerCard from '../farmerCard/farmerCard';

const buildFarmerList = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      farmers.forEach((farmer) => {
        domString += farmerCard.buildFarmerCard(farmer);
      });
      utilities.printToDom('house', domString);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildFarmerList };
