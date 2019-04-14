import $ from 'jquery';
import 'bootstrap';
import getProjects from './projects';
import headshot from './images/NewSDW.jpg';

$('#headshot').attr('src', headshot);
getProjects();
