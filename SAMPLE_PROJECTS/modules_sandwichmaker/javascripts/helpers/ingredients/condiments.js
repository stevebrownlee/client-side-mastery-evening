const condimentsInfo = {
  nocondiments: 0.00,
  mayo: 500.00,
  mustard: 2.10,
  avocado: 0.00,
  beercheese: 1.00,
  relish: 1.44
};

const addCondiments = (condiments) => {
  const newCondiments = {
    name: condiments,
    price: condimentsInfo[condiments],
    type: 'condiments'
  };

  return newCondiments;
};

export default { addCondiments };