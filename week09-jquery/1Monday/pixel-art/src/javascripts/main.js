import grid from './components/grid/grid';
// import paintbrush from './components/paintbrush/paintbrush';
import '../styles/main.scss';

const init = () => {
  grid.makeGrid(25, 25);
  // paintbrush.attachEvents();
  // paintbrush.printColorPicker();
};

init();
