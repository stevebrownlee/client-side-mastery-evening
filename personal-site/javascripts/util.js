const printToDom = (whereToPrint, thingToPrint) => {
  document.getElementById(whereToPrint).innerHTML = thingToPrint;
};

export {printToDom};