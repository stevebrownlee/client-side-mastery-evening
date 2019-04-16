const breadInfo = {
  rye: 3.00,
  sourdough: 2.50,
  wheat: 2.00,
  white: 1.50
};

const addBread = (bread) => {
  const newBread = {
    name: bread,
    price: breadInfo[bread],
    type: 'bread'
  };

  return newBread;
};

export default { addBread };