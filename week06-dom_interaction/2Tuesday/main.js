
let counter = 0;

const submitCardButton = document.getElementById('submit__addCard');
const form = document.getElementById('addCard');

const printToDom = (stringToPrint, idToPrintTo) => {
  const printHere = document.getElementById(idToPrintTo);
  if (printHere) {
    printHere.innerHTML += stringToPrint;
    return true;
  } else {
    return false;
  }
}

const buildNewCard = (todoText, notesText, dateAdded) => {
  const domString = 
  `<div class="card text-white bg-info mb-3 m-2 w-25" id="card--${counter}">
  <div class="card-header">To Do Since ${dateAdded}</div>
  <div class="card-body">
    <h5 class="card-title">${todoText}</h5>
    <p class="card-text">${notesText}</p>
  </div>
  <button class="btn btn-warning delete" id="btn--${counter}">Delete this shit</button>`;
  const itPrintedANewCard = printToDom(domString, 'outputCards');
  if (itPrintedANewCard) {
    counter ++;
    activateDeleteButtons();
  }
};

// const deleteCallback = (e) => {
//   const idToDelete = e.target.id.split('btn--')[1];
//   const cardToDeleteId = `card--${idToDelete}`;
//   const cardToDelete = document.getElementById(cardToDeleteId);
//   cardToDelete.remove();
// }

const deleteCallback = (e) => {
  const cardToDelete = e.target.parentNode;
  cardToDelete.remove();
}

const activateDeleteButtons = () => {
  const allDeleteButtons = document.getElementsByClassName('delete');
  for (let i = 0; i < allDeleteButtons.length; i++) {
    const deleteButton = allDeleteButtons[i];
    deleteButton.addEventListener("click", deleteCallback);
  }
}

const getPrettyDate = () => {
  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  var today  = new Date();

  return today.toLocaleDateString("en-US", options);
}

// const activateFormButton = () => {
//   submitCardButton.addEventListener("click", (e) => {
//     e.preventDefault();
  
//     const toDoInput = document.getElementById('toDo__addCard');
//     const notesInput = document.getElementById('notes__addCard');

//     const dateAdded = getPrettyDate();
  
//     buildNewCard(toDoInput.value, notesInput.value, dateAdded);

//     toDoInput.value = '';
//     notesInput.value = '';
//   });
// };

const activateFormButton = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const toDoInput = document.getElementById('toDo__addCard');
    const notesInput = document.getElementById('notes__addCard');

    const dateAdded = getPrettyDate();
  
    buildNewCard(toDoInput.value, notesInput.value, dateAdded);

    toDoInput.value = '';
    notesInput.value = '';
  });
};

activateFormButton();