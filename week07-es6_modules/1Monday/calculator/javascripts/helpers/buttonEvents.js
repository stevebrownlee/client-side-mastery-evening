const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');
const equalsButton = document.getElementById('equalsButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const zeroButton = document.getElementById('zeroButton');


const divideButtonEvent = () => {
  divideButton.addEventListener('click', () => {
    console.log('you clicked divide button');
  });
};

const addButtonEvent = () => {
  addButton.addEventListener('click', () => {
    console.log('you clicked add button');
  });
};

const multiplyButtonEvent = () => {
  multiplyButton.addEventListener('click', () => {
    console.log('you clicked multiply button');
  });
};

const subtractButtonEvent = () => {
  subtractButton.addEventListener('click', () => {
    console.log('you clicked subtract button');
  });
};

const equalsButtonEvent = () => {
  equalsButton.addEventListener('click', () => {
    console.log('you clicked =');
  });
};

const oneButtonEvent = () => {
  oneButton.addEventListener('click', () => {
    console.log('you clicked 1');
  });
};

const twoButtonEvent = () => {
  twoButton.addEventListener('click', () => {
    console.log('you clicked 2');
  });
};

const threeButtonEvent = () => {
  threeButton.addEventListener('click', () => {
    console.log('you clicked 3');
  });
};

const fourButtonEvent = () => {
  fourButton.addEventListener('click', () => {
    console.log('you clicked 4');
  });
};

const fiveButtonEvent = () => {
  fiveButton.addEventListener('click', () => {
    console.log('you clicked 5');
  });
};

const sixButtonEvent = () => {
  sixButton.addEventListener('click', () => {
    console.log('you clicked 6');
  });
};

const sevenButtonEvent = () => {
  sevenButton.addEventListener('click', () => {
    console.log('you clicked 7');
  });
};

const eightButtonEvent = () => {
  eightButton.addEventListener('click', () => {
    console.log('you clicked 8');
  });
};

const nineButtonEvent = () => {
  nineButton.addEventListener('click', () => {
    console.log('you clicked 9');
  });
};

const zeroButtonEvent = () => {
  zeroButton.addEventListener('click', () => {
    console.log('you clicked 0');
  });
};


const attachEvents = () => {
  divideButtonEvent();
  addButtonEvent();
  multiplyButtonEvent();
  subtractButtonEvent();
  equalsButtonEvent();
  oneButtonEvent();
  twoButtonEvent();
  threeButtonEvent();
  fourButtonEvent();
  fiveButtonEvent();
  sixButtonEvent();
  sevenButtonEvent();
  eightButtonEvent();
  nineButtonEvent();
  zeroButtonEvent();
};

export default attachEvents;