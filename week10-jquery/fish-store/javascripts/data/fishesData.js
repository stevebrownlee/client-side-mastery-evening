import {initialFishView} from '../components/fishes.js'

function errorFunction () {
  console.log("An error occurred while loading fishes");
}

const whenFishesLoad = (data) => {
  const fishes = data.fishes;
  initialFishView(fishes);
};


const loadFishes = () => {
  $.get('../db/fishes.json')
    .done(whenFishesLoad)
    .fail(errorFunction);
};

export {loadFishes};
