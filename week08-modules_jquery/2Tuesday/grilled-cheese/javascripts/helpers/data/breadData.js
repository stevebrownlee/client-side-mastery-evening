const breads = [
  {
    id: 'bread1',
    type: 'wheat',
    color: '#F5DEB3',
    price: 1
  },
  {
    id: 'bread2',
    type: 'white',
    color: 'white',
    price: 0.50
  },
  {
    id: 'bread3',
    type: 'Rye',
    color: '#DEB887',
    price: 2
  },
  {
    id: 'bread4',
    type: 'Pumpernickel',
    color: '#764d41',
    price: 3
  }
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
  selectedBreadId = breadId;
  console.log('selectedBreadId', selectedBreadId);
};

const getSelectedBread = () => {
  const findBread = breads.find((x) => x.id === selectedBreadId)
  return findBread;
}

const getBreads = () => {
  return breads;
};

export default { setSelectedBread, getBreads, getSelectedBread };