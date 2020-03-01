import breadData from '../helpers/data/breadData.js';
import cheeseData from '../helpers/data/cheeseData.js';
import util from '../helpers/util.js';

const sandwichMaker = () => {
  const bread = breadData.getSelectedBread();
  const cheeses = cheeseData.getSelectedCheeses();
  let domString = '';
  domString += `<div class="col-12" style="background-color: ${bread.color}">${bread.type} bread</div>`
  cheeses.forEach((cheese) => {
    domString += `<div class="col-12" style="background-color: ${cheese.color}">${cheese.type}</div>`
  })
  domString += `<div class="col-12" style="background-color: ${bread.color}">${bread.type} bread</div>`
  util.printToDom('sandwich-container', domString)
}


export default { sandwichMaker };