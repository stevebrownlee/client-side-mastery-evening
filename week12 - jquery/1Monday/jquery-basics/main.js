const fishForSale = $('#available .fish')
const saleButton = $('#show-sale');
const availableContainer = $('#available')
const basketContainer = $('#snagged')
let discount = 0.2;

const applySale = () => {
   let onSaleFishes = fishForSale.filter('.on-sale')
   onSaleFishes.each((fish) => {
       const oldFishPrice = $(onSaleFishes[fish]).find('.price');
       const newPrice = (parseInt(oldFishPrice.html()) * (1 - discount)).toFixed(2);
       oldFishPrice.html(newPrice);
   })
}

const filterFish = () => {
    fishForSale.not('.on-sale').toggle();
}

saleButton.click((e) => {
    filterFish();
    $(e.target).text(function(i, text) {
        return text === "Show Sale Fish" ? "Show All Fish" : "Show Sale Fish"
    });
});

const addToBasket = (e) => {
    const fishToAddToBasket = $(e.target).closest('.fish');
    basketContainer.append(fishToAddToBasket)
}

$('.add').click(addToBasket);

applySale();    