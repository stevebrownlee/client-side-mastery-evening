const loadItems = (loadFunction, errorFunction) => {
  const dinoLoader = new XMLHttpRequest();
  dinoLoader.addEventListener('load', loadFunction);
  dinoLoader.addEventListener('error', errorFunction);
  dinoLoader.open('GET', '../db/items.json');
  dinoLoader.send();
};

module.exports = loadItems;
