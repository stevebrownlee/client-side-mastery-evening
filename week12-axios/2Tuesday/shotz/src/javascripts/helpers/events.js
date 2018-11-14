import $ from 'jquery';

const allButton = $('#all');
const morningButton = $('#morning');
const afternoonButton = $('#afternoon');
const eveningButton = $('#evening');
const afterDarkButton = $('#dark');

const allButtonEvent = () => {
  allButton.on('click', () => {
    $('.bg-secondary').closest('.location').show();
    $('.bg-success').closest('.location').show();
    $('.bg-info').closest('.location').show();
    $('.bg-danger').closest('.location').show();
  });
};

const morningButtonEvent = () => {
  morningButton.on('click', () => {
    $('.bg-secondary').closest('.location').show();
    $('.bg-success').closest('.location').hide();
    $('.bg-info').closest('.location').hide();
    $('.bg-danger').closest('.location').hide();
  });
};

const afternoonButtonEvent = () => {
  afternoonButton.on('click', () => {
    $('.bg-secondary').closest('.location').hide();
    $('.bg-success').closest('.location').show();
    $('.bg-info').closest('.location').hide();
    $('.bg-danger').closest('.location').hide();
  });
};

const eveningButtonEvent = () => {
  eveningButton.on('click', () => {
    $('.bg-secondary').closest('.location').hide();
    $('.bg-success').closest('.location').hide();
    $('.bg-info').closest('.location').show();
    $('.bg-danger').closest('.location').hide();
  });
};

const afterDarkButtonEvent = () => {
  afterDarkButton.on('click', () => {
    $('.bg-secondary').closest('.location').hide();
    $('.bg-success').closest('.location').hide();
    $('.bg-info').closest('.location').hide();
    $('.bg-danger').closest('.location').show();
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
