const meatInfo = {
  bacon: 0.00,
  chicken: 1.12,
  ham: 2.50,
  nomeat: 0.00,
  salami: 0.90,
  seitan: 6.66,
  spam: 5.00,
  tofu: 1.45,
  turkey: 2.00
};

const addMeat = (meat) => {
  const newMeat = {
    name: meat,
    price: meatInfo[meat],
    type: 'meat'
  };

  return newMeat;
};

export default { addMeat };