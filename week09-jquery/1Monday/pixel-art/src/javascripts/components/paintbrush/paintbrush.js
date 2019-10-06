import $ from 'jquery';
import utilities from '../../helpers/utilities';

const paintColors = ['blue', 'red', 'green', 'orange', 'black', 'chartreuse'];

const paintPixel = (e) => {
  const pixel = $(e.target);
  const fillColor = $('.color-choice:checked').val();
  pixel.css('backgroundColor', fillColor);
};

const printColorPicker = () => {
  let domString = '';
  paintColors.forEach((color) => {
    domString += `
    <div class="form-check form-check-inline paintbrush">
      <input class="color-choice" type="radio" name="colorPicker" id="${color}Choice" value="${color}">
      <label class="form-check-label" for="${color}Choice">${color}</label>
    </div>
    `;
  });

  utilities.printToDom('color-picker', domString);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { attachEvents, printColorPicker };
