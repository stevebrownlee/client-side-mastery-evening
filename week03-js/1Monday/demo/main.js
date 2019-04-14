const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
  // do some stuff
  // if under 21 'drink some water'
  // else if over 21 AND under 65 'have a beer'
  // else over 65 'take a nap'
  if (num < 21) {
    return 'drink some water';
  } else if (num > 20 && num < 65) {
    return 'have a beer';
  } else {
    return 'take a nap';
  }
};

// Bonus = printToDom function
printToDom('thirsty', iAmThursty(55));
printToDom('thirsty', iAmThursty(11));
printToDom('thirsty', iAmThursty(67));

console.log(1 === '1'); // false
// console.log(1 == '1'); // true
console.log(1 !== '2') //true

console.log('cats'.length) // how many characters in a string

const quote = 'winter is coming';
console.log(quote.indexOf('is'));  // returns 7
console.log(quote.indexOf('bunny'));  // returns -1


const catName = () => {
  return 'killer';
}

const bucketOCats = {
  cat1: 'fluffy',
  cat2: 5,
  cat3: catName,
  cat4: {
    water: 'nope',
    sunlight: 'yep'
  }
};

// dot notation
console.log(bucketOCats.cat2);

// bracket notation
console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);

let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
      copies_sold: 14000000,
      formats: ["radio", "TV", "film", "graphic novel"],
      ultimate_answer: {
          meaning_of_life: 42
      }
  }
};

console.log('the meaning of life is: ', hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
};

// Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}`);
// Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`Jeff was hired on ${employee['hire_date']}`);
// Add a new key, vacation_days, and its value, 20, to employee. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
employee.vacation_days = 20;
// employee['vacation_days'] = 20;

let eom = "employee_of_the_month";
// Use the variable above to add a new property to employee. Set its value to false. Should you use dot or bracket notation?
employee[eom] = false;

employee.eom = false;
console.log(employee);