import { applySale } from "./fishDiscount.js";

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
  $(e.target).text('Remove from Basket').removeClass('add').addClass('remove');
};

const removeFromBasket = (e) => {
  const fishToRemoveFromBasket = $(e.target).closest('.fish');
  $('#available').append(fishToRemoveFromBasket);
  $(e.target).text('Add to Basket').removeClass('remove').addClass('add');
};

const bindEvents = () => {
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
  $('body').on('click', 'button.add', moveToCart);
  $('body').on('click', 'button.remove', removeFromBasket);
};

const writeFishes = (fishes) => {
  let domString = '';
  fishes.forEach((fish) => {
    domString += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 offset-md-3">`;
    domString +=    `<img class="card-img-top" src="${fish.imageSoure}" alt="" width="40%">`;
    domString +=      `<div class="card-body">`;
    domString +=         `<h3 class="card-title" id="thumbnail-label">${fish.name}</h3>`;
    domString +=         `<p class="card-text">$`;
    domString +=           `<span class="price">${fish.basePrice}</span>`;
    domString +=         `</p>`;
    domString +=         `<button class="add btn btn-danger">Add To Basket</button>`;
    domString +=       `</div>`;
    domString += `</div>`;
  });
  $('#available').append(domString);

};

const initialFishView = (fishes) => {
  writeFishes(fishes);
  applySale();
  bindEvents();
}


export {initialFishView};