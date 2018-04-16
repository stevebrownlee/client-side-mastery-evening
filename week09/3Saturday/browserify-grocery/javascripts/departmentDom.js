const departmentEvents = require('./departmentEvents');

const departmentsOutputDiv = document.getElementById('departments');

const departmentsDomString = (departments) => {
  let domString = '';
  departments.forEach(department => {
    domString += `<div class="col-sm-3 text-center department">`;
    domString +=     `<div class="panel-body">`;
    domString +=       `<h3 class="department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    domString +=       `<img class="department-image" src="${department.img}">`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printDepartmentsToDom = (departments) => {
  departmentsOutputDiv.innerHTML = departmentsDomString(departments);
  departmentEvents();
};

module.exports = printDepartmentsToDom;
