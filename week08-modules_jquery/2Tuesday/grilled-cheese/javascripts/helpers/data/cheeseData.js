const cheeses = [
  {
    id: 'cheese1',
    type: 'swiss',
    color: 'cornsilk',
    price: 1
  },
  {
    id: 'cheese2',
    type: 'cheddar',
    color: '#FFB90F',
    price: 0.5
  },
  {
    id: 'cheese3',
    type: 'Blue',
    color: 'blue',
    price: 0.89
  },
  {
    id: 'cheese4',
    type: 'goat',
    color: 'white',
    price: 5
  },
];

const selectedCheeses = [];

const setCheese = (cheeseId) => {
  const foundCheese = cheeses.find((x) => x.id === cheeseId);
  selectedCheeses.push(foundCheese);
};

const getCheeses = () => {
  return cheeses;
};

const getSelectedCheeses = () => {
  return selectedCheeses;
}

export default { getCheeses, setCheese, getSelectedCheeses };