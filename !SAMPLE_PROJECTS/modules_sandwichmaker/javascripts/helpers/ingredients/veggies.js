const veggiesInfo = {
  noveggies: 0.00,
  habanero: 2.00,
  avocado: 0.00,
  carrot: 0.34,
  lettuce: 1.00,
  tomato: 3.00,
  redonion: 5.00,
  pickle: 0.00
};

const addVeggies = (veggies) => {
  const newVeggies = {
    name: veggies,
    price: veggiesInfo[veggies],
    type: 'veggies'
  };

  return newVeggies;
};

export default { addVeggies };