import {loadPinsForBoard} from '../data/pinsData.js';

const shortenLink = (full_url) => {
  const hostname = new URL(full_url).hostname;
  return hostname;
}

const bindEvents = () => {
  $('#toBoardsBtn').click(() => {
    $('#pins-page').hide();
    $('#boards-page').show();
  });
}

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `
        <div id='${pin.id}' class="pcard pin-card p-2">
          <img class="card-img-top" src="${pin.image_url}" alt="pin image">
          <a href='${pin.link}' target='_blank'>${shortenLink(pin.link)}</a>
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