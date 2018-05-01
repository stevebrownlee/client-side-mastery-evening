(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./events":2,"./fishDom":3,"./fishes":4}],2:[function(require,module,exports){
// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
};

const bindEvents = () => {
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
  $('button.add').click(moveToCart);
};

module.exports = bindEvents;

},{}],3:[function(require,module,exports){
const writeFishes = (fishes) => {
  let domString = '';
  fishes.forEach((fish) => {
    domString += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">`;
    domString +=   `<div class="thumbnail">`;
    domString +=     `<img src="${fish.imageSoure}" alt="" width="40%">`;
    domString +=       `<div class="caption">`;
    domString +=         `<h3 id="thumbnail-label">${fish.name}</h3>`;
    domString +=         `<p>$`;
    domString +=           `<span class="price">${fish.basePrice}</span>`;
    domString +=         `</p>`;
    domString +=        `</div>`;
    domString +=       `<div class="caption card-footer">`;
    domString +=      `<button class="add btn btn-danger">Add To Basket</button>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeFishes;

},{}],4:[function(require,module,exports){
const loadItems = (loadFunction, errorFunction) => {
  $.get('/db/fishes.json')
    .done(loadFunction)
    .fail(errorFunction);
};

module.exports = loadItems;

},{}],5:[function(require,module,exports){
const initializer = require('./data');

initializer();

},{"./data":1}]},{},[5]);
