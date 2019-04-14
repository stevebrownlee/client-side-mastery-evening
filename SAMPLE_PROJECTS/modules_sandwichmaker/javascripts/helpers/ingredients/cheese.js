const cheeseInfo = {
  nocheese: 0.00,
  swiss: 0.90,
  blue: 2.50,
  cheddar: 3.00,
  brie: 5.00
};

const addCheese = (cheese) => {
  const newCheese = {
    name: cheese,
    price: cheeseInfo[cheese],
    type: 'cheese'
  };

  return newCheese;
};

export default { addCheese };