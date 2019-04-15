import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import pet from './components/pet';
import sleep from './components/sleep';

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
