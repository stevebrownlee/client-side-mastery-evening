const loadItems = (loadFunction, errorFunction) => {
  $.get('/db/fishes.json')
    .done(loadFunction)
    .fail(errorFunction);
};

module.exports = loadItems;
