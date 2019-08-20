console.log('OBJECTS');

// Demo #1
const ageCheck = (age) => {
  if (age < 21) {
    console.log('no drinks for you');
  } else {
    console.log('PARTAY!!!!!');
  }
}

ageCheck(12);
ageCheck(24);

// Demo #2
const lengthOutput = (strang) => {
  return strang.length;
}

console.log(lengthOutput('cats'));
console.log(lengthOutput('Winter is Coming'));

const quoteFinder = (testString) => {
  return 'winter is coming'.indexOf(testString)
}

const quote = 'winter is coming';
console.log(quoteFinder('is')); // 7 - the word 'is' starts on the 7th index
console.log(quoteFinder('cow')); // -1 - the word 'cow' does not appear in this string

// Sample objects
const expense = {
  dateCreated: "01/01/2017",
  location: "Bob's Burgers",
  dollarAmount: "14.34",
  purpose: "Lunch with very important client",
  code: "1001A"
};

const employee = {
  firstName: "Michael",
  lastName: "Tambornino",
  role: "Sales Rep",
  accountNumber: "1-8349058340"
};

console.log(employee.firstName);
console.log(expense['code']);

// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'
const statusMaker = (emp) => {
  if (emp.firstName[0] === 'M') {
    emp.status = 'vip';
  } else {
    emp.status = 'peasant';
  }
  return emp;
}

console.log(statusMaker(employee));