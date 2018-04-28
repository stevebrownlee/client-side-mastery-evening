const saleButton = $('#show-sale');
const availableContainer = $('#available')
const basketContainer = $('#snagged')
let discount = 0.2;

const applySale = () => {
   const fishForSale = $('#available .fish')
   let onSaleFishes = fishForSale.filter('.on-sale')
   onSaleFishes.each((fish) => {
       const oldFishPrice = $(onSaleFishes[fish]).find('.price');
       const newPrice = (parseInt(oldFishPrice.html()) * (1 - discount)).toFixed(2);
       oldFishPrice.html(newPrice);
   })
}

const filterFish = () => {
    const fishForSale = $('#available .fish')
    fishForSale.not('.on-sale').toggle();
}

saleButton.click((e) => {
    filterFish();
    $(e.target).text(function(i, text) {
        return text === "Show Sale Fish" ? "Show All Fish" : "Show Sale Fish"
    });
});

const addToBasket = (e) => {
    const fishForSale = $('#available .fish')
    const fishToAddToBasket = $(e.target).closest('.fish');
    basketContainer.append(fishToAddToBasket)
}



const writeFishes = (fishes) => {
    const fishArray = fishes.fishes;
    let domString = '';
    fishArray.forEach((fish) => {
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
    })
    availableContainer.append(domString);
    $('.add').on('click', addToBasket);
    applySale();
}

$.ajax('./fishes.json')
.done(writeFishes)
.fail((error) => {console.log('error from getting fishes', error)})