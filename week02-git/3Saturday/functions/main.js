// Zoe Ames
// Britney Spears
// Tori Amos
// Sam Smith
// John doe

// const firstName = 'Zoe';
// const lastName = 'Ames';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';
// console.log(`${firstName1} ${lastName1}`);

// const firstName2 = 'Tori';
// const lastName2 = 'Amos';
// console.log(`${firstName2} ${lastName2}`);

const namePrinter = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');

namePrinter('Ames', 'Zoe');

namePrinter(1,2);



const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('student'));

// 1 input  string  'border collie'
// output = my favorite dog breed is border collie

const dogBreed = (dogName) => {
  return `my favorite dog breed is ${dogName}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('a cat'));

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('lab');

// const nuggetizerDiv = document.getElementById('nuggetizer');
// nuggetizerDiv.innerHTML = nuggetizer('bear');
// nuggetizerDiv.innerHTML += nuggetizer('kitten');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('lab'))
printToDom('nuggetizer', nuggetizer('bear'));
printToDom('nuggetizer', nuggetizer('kitten'));
printToDom('nuggetizer', 'mmmmmmmmmmmm');


let bandNumber = 1;
const addBand = (bandName) => {
  // do stuff
  // get band
  // text to send
  const bandText = `<h5>${bandNumber}. ${bandName}</h5>`;
  // modify band number
  bandNumber = bandNumber + 1;
  printToDom('band-list', bandText);
}


addBand('Metalica') // 1. Metalica
addBand('slayer')  // 2. Slayer
addBand('b')
addBand('c')
addBand('d')
addBand('e')