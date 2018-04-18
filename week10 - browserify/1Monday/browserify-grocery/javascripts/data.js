let items = [];
let departments = [];
const cart = [];

const getItems = () => {
  return items;
};

const getDepartments = () => {
  return departments;
};

const setItems = newItems => {
  items = newItems;
};

const setDepartments = newDepartments => {
  departments = newDepartments;
};

const getItemsByDepartment = departmentId => {
  const selectedItems = [];
  items.forEach(item => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const getCart = () => {
  return cart;
};

const setCart = (itemId, numberToAdd) => {
  const cartPosition = cart
    .map(function (c) {
      return c.id;
    })
    .indexOf(itemId);

  if (cartPosition === -1) {
    const itemPosition = items
      .map(function (item) {
        return item.id;
      })
      .indexOf(itemId);
    const newItem = items[itemPosition];
    newItem.purchaseNum = numberToAdd;
    cart.push(newItem);
  } else {
    cart[cartPosition].purchaseNum = numberToAdd;
  }
};

const removeCartItem = itemId => {
  const cartPosition = cart
    .map(function (c) {
      return c.id;
    })
    .indexOf(itemId);
  cart.splice(cartPosition,1);
};

module.exports = {
  getItemsByDepartment,
  getDepartments,
  getItems,
  setItems,
  setDepartments,
  setCart,
  getCart,
  removeCartItem,
};
