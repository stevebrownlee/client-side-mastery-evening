const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    domString += `<h1>${colors[i]}</h1>`
  }
  console.log(domString);
};

const instructors = [
  {first: "Zoe", last: "Ames"},
  {first: "Callan", last: "Morrison"},
  {first: "Greg", last: "Korte"},
  {first: "Michael", last: "Clarke"},
];

const nameLoop = () => {
  let domString = '';
  for (let i = 0; i < instructors.length; i++) {
    // console.log(instructors[i]);
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }
  console.log(domString);
};

const init = () => {
  colorLoop();
  nameLoop();
}

init();