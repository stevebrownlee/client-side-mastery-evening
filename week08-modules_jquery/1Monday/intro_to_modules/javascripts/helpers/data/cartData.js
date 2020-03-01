const cart = [];

const getCart = () => {
  return cart;
};

const setCart = (book) => {
  cart.push(book);
};

export default { getCart,  setCart};