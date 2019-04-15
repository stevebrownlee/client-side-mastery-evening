import eat from './components/eat/eat';
import fight from './components/fight/fight';
import play from './components/play/play';
import pet from './components/pet/pet';
import sleep from './components/sleep/sleep';

import '../styles/main.scss';

const init = () => {
  eat.domStringBuilder();
  fight.domStringBuilder();
  play.domStringBuilder();
  sleep.domStringBuilder();
  pet.domStringBuilder();

  // console.error(eat.getFull());
  // console.error(fight.getStrength());
  // console.error(play.getFun());
  // console.error(sleep.getEnergy());
};

init();
