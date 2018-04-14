let items = [];
let departments = [];

const getItems = () => {
  return items;
};

const getDepartments = () => {
  return departments;
};

const setItems = (newItems) => {
  items = newItems;
};

const setDepartments = (newDepartments) => {
  departments = newDepartments;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

module.exports = {
  getItemsByDepartment,
  getDepartments,
  getItems,
  setItems,
  setDepartments,
};
