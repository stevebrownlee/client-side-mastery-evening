const departmentsDom = require('./departmentDom');
const data = require('./data');
const loadItems = require('./items');
const loadDepartments = require('./departments');

const errorFunction = function () {
  console.error('Shit broke :(');
};

const whenItemsLoad = function () {
  const items = JSON.parse(this.responseText).items;
  data.setItems(items);
};

const whenDepartmentsLoad = function () {
  const departments = JSON.parse(this.responseText).departments;
  data.setDepartments(departments);
  departmentsDom(departments);
};

const initializer = () => {
  loadItems(whenItemsLoad, errorFunction);
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

module.exports = {
  initializer,
};
