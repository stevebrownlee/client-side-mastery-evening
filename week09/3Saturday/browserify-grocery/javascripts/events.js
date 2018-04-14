const itemsDom = require('./itemsDom');
const data = require('./data');

const departmentCards = document.getElementsByClassName('department');
const departmentDiv = document.getElementById('departments');

const showDepartmentName = (e) => {
  const departmentName = e.target.children[0].children[0];
  const departmentImg = e.target.children[0].children[1];

  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};

const hideDepartmentName = (e) => {
  const departmentName = e.target.children[0].children[0];
  const departmentImg = e.target.children[0].children[1];

  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};

const showItems = (e) => {
  console.log('e', e);
  let departmentId = '';
  if (e.target.classList.contains('department-image')) {
    departmentId = e.target.parentNode.children[0].dataset.departmentId;
  } else {
    departmentId = e.target.children[0].children[0].dataset.departmentId;
  };

  const selectedItems = data.getItemsByDepartment(departmentId);
  departmentDiv.innerHTML = '';
  itemsDom(selectedItems);
};

const addDepartmentEvents = () => {
  for (let i = 0; i < departmentCards.length; i++) {
    departmentCards[i].addEventListener('mouseenter', showDepartmentName);
    departmentCards[i].addEventListener('mouseleave', hideDepartmentName);
    departmentCards[i].addEventListener('click', showItems);
  }
};

module.exports = {
  addDepartmentEvents,
};
