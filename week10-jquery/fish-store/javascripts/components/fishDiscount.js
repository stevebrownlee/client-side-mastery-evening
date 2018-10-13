const discount = 0.2;

const applySale = () => {
  $('#available .fish.on-sale').each((i, fish) => {
    const oldFishPrice = $(fish).find('.price');
    const newPrice = (parseInt(oldFishPrice.html()) * (1 - discount)).toFixed(2);
    oldFishPrice.html(newPrice);
  });
};

export { applySale };