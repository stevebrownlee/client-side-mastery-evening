const loadFishes = require('./fishes');
const fishDom = require('./fishDom');
const bindEvents = require('./events');

const errorFunction = (error) =>  {
  console.error({error: error,});
};

const whenFishesLoad = (data) => {
  const fishes = data.fishes;
  const fishStringToPrint = fishDom(fishes);
  $('#available').append(fishStringToPrint);
  bindEvents();
};

const initializer = () => {
  loadFishes(whenFishesLoad, errorFunction);
};

module.exports = initializer;
