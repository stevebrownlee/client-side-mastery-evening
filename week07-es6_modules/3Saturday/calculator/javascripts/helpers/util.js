const printToDom = (stringToPrint, idToPrintTo) => {
  const printHere = document.getElementById(idToPrintTo);
  if (printHere) {
    printHere.innerHTML = stringToPrint;
  }
}

export {printToDom};