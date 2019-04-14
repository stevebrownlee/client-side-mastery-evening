const dinosaurs = [
  {
    dinoType: 't-rex',
    name: 'wrex',
  },
  {
    dinoType: 'stegosaurus',
    name: 'steve',
  },
  {
    dinoType: 'velociraptor',
    name: 'Ted',
  }
];

// loop over dinosaurs
// build up a domstring
// print domstring to the dom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
  let domString = '';
  for(let i = 0; i < dinosaurs.length; i++){
    domString += `<div class="dinosaur">`
    domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
    domString +=   `<p>${dinosaurs[i].name}</p>`
    domString += `</div>`
  }
  printToDom('dino-barn', domString)
};

const assignments = [
  {
    title: 'product cards',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'http://www.google.com',
  },
  {
    title: 'product cards2',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'http://www.google.com',
  },
  {
    title: 'product cards3',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'http://www.google.com',
  },
  {
    title: 'product cards4',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'http://www.google.com',
  },
  {
    title: 'product cards5',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'http://www.google.com',
  }
];

// total of 5 assignments
// buildAssignmentCards - loop over assignments and make a domString
// reuse the printToDom function to display the domString

const buildAssignmentCards = () => {
  let domString = '';
  for(let j = 0; j < assignments.length; j++) {
    domString += `<div class="assignment">`
    domString +=   `<div class="assignment-title">${assignments[j].title}</div>`;
    domString +=   `<strong>Due Date: ${assignments[j].dueDate}</strong>`
    domString +=   `<div>Get the assignment <a href=${assignments[j].assignmentUrl}>HERE</a></div>`
    domString +=   `<div>Topic: ${assignments[j].topic}</div>`
    domString +=   `<div>Notes: ${assignments[j].notes}</div>`
    domString += `</div>`
  }

  printToDom('assignments', domString)
};


const init = () => {
  buildDinosaurs();
  buildAssignmentCards();
};

init();