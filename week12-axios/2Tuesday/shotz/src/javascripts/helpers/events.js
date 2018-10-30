import $ from 'jquery';

const allButton = $('#all');
const morningButton = $('#morning');
const afternoonButton = $('#afternoon');
const eveningButton = $('#evening');
const afterDarkButton = $('#dark');

const allButtonEvent = () => {
  allButton.on('click', () => {
    $('.bg-secondary').closest('.cardz').show();
    $('.bg-success').closest('.cardz').show();
    $('.bg-info').closest('.cardz').show();
    $('.bg-danger').closest('.cardz').show();
  });
};

const morningButtonEvent = () => {
  morningButton.on('click', () => {
    $('.bg-secondary').closest('.cardz').show();
    $('.bg-success').closest('.cardz').hide();
    $('.bg-info').closest('.cardz').hide();
    $('.bg-danger').closest('.cardz').hide();
  });
};

const afternoonButtonEvent = () => {
  afternoonButton.on('click', () => {
    $('.bg-secondary').closest('.cardz').hide();
    $('.bg-success').closest('.cardz').show();
    $('.bg-info').closest('.cardz').hide();
    $('.bg-danger').closest('.cardz').hide();
  });
};

const eveningButtonEvent = () => {
  eveningButton.on('click', () => {
    $('.bg-secondary').closest('.cardz').hide();
    $('.bg-success').closest('.cardz').hide();
    $('.bg-info').closest('.cardz').show();
    $('.bg-danger').closest('.cardz').hide();
  });
};

const afterDarkButtonEvent = () => {
  afterDarkButton.on('click', () => {
    $('.bg-secondary').closest('.cardz').hide();
    $('.bg-success').closest('.cardz').hide();
    $('.bg-info').closest('.cardz').hide();
    $('.bg-danger').closest('.cardz').show();
  });
};
const setEvents = () => {
  allButtonEvent();
  morningButtonEvent();
  afternoonButtonEvent();
  eveningButtonEvent();
  afterDarkButtonEvent();
};

export default setEvents;
