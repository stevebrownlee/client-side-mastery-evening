import smash from '../../helpers/data/smash';

import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((machine) => {
      console.log('machine', machine);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheMachine };
