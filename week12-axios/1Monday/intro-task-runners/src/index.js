import $ from 'jquery';
import 'bootstrap';

import message from './message';

import './index.scss';

$('#click-button').on('click', () => {
  $('#important-text').append(message);
});
