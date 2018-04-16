const loadDepartments = (loadFunction, errorFunction) => {
  const dinoLoader = new XMLHttpRequest();
  dinoLoader.addEventListener('load', loadFunction);
  dinoLoader.addEventListener('error', errorFunction);
  dinoLoader.open('GET', '../db/departments.json');
  dinoLoader.send();
};

module.exports = loadDepartments;
