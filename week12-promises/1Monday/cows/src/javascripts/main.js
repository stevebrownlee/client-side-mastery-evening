import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmerList();
};

init();
