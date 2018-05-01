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
  // $('button.add').on('click', moveToCart);
  // $('button.remove').on('click', removeFromBasket);
};

module.exports = bindEvents;
