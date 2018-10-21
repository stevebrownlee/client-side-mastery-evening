import {loadPinsForBoard} from '../data/pinsData.js';

const bindEvents = () => {
  $('.pin-card').hover(
  (e) => {
    const pinId = $(e.target).closest('.pin-card').attr('id');
    $(`#${pinId}.pin-card > p`).show()
  },
  (e) => {
    const pinId = $(e.target).closest('.pin-card').attr('id');
    $(`#${pinId}.pin-card > p`).hide()
  });
}

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `
        <div id='${pin.id}' class="pin-card p-2">
          <img class="card-img-top" src="${pin.image_url}" alt="pin image">
          <p style='display: none;'>Link</p>
        </div>
      `
  })
  $('#pins-on-board').html(domString);
}

const initialPinsView = (boardId) => {
  loadPinsForBoard(boardId)
    .then(data => {
      writePins(data);
      bindEvents();
    }).catch(error => console.error('load pins view', error));
}

  export {initialPinsView};