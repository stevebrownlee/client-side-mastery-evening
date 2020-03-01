// 8 ducks
// 5 male
// 3 female
// 5 rubber
// 3 real
// pick 3 colors (i did blue, pink, brown)

const ducks = [
  {
    color: 'blue',
    isRubber: true,
    gender: 'female',
    isMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: 0,
    name: 'Regina',
    imageUrl: 'https://lilalu-shop.com/media/image/81/f6/59/1513_f_600x600.png'
  },
  {
    color: 'pink',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: 'single',
    diet: 'shrimp',
    age: 1,
    featherNum: 0,
    name: 'Ducky',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/412EyhoWToL._SY355_.jpg'
  },
  {
    color: 'brown',
    isRubber: false,
    gender: 'male',
    isMigrator: true,
    socialStatus: 'single',
    diet: 'garbage',
    age: 3,
    featherNum: 7667,
    name: 'George',
    imageUrl: 'https://i.pinimg.com/originals/dd/98/bd/dd98bd6875f619a43181edab2f899c7f.jpg'
  },
  {
    color: 'blue',
    isRubber: true,
    gender: 'male',
    isMigrator: true,
    socialStatus: 'single',
    diet: 'other ducks',
    age: 4,
    featherNum: 0,
    name: 'Steve',
    imageUrl: 'https://m.media-amazon.com/images/I/51WEvgpXwYL._SR500,500_.jpg'
  },
  {
    color: 'pink',
    isRubber: true,
    gender: 'male',
    isMigrator: true,
    socialStatus: 'taken',
    diet: 'pizza',
    age: 100,
    featherNum: 0,
    name: 'Don',
    imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/594/4524/1dc8187e067c43de7bc19660116ff024_1024x1024__85592.1523728627.jpg'
  },
  {
    color: 'brown',
    isRubber: false,
    gender: 'male',
    isMigrator: true,
    socialStatus: 'taken',
    diet: 'chicken',
    age: 13,
    featherNum: 44,
    name: 'Eric',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFvbW2BaGRwBago4SdhcIofoAPwb0X44YrwlLFIzmY9ONJz1zo'
  },
  {
    color: 'blue',
    isRubber: true,
    gender: 'female',
    isMigrator: true,
    socialStatus: 'taken',
    diet: 'plastic',
    age: 345,
    featherNum: 0,
    name: 'Ginger',
    imageUrl: 'https://i.ebayimg.com/images/g/ZfYAAOSwN-xdl5ou/s-l640.jpg'
  },
  {
    color: 'brown',
    isRubber: false,
    gender: 'female',
    isMigrator: true,
    socialStatus: 'taken',
    diet: 'grubs',
    age: 4,
    featherNum: 67,
    name: 'Stephanie',
    imageUrl: 'https://i.pinimg.com/originals/97/e4/58/97e4585d774f91828b69855d4533408f.jpg'
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const duckPrinter = (quacks) => {
  let domString = '';
  for(let i = 0; i< quacks.length; i++){
    domString += '<div class="col-md-6 col-lg-4 card-separation">'
    domString += '<div class="card">';
    domString += `  <img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
    domString += '  <div class="card-body">';
    domString += `    <h5 class="card-title">${quacks[i].name}</h5>`;
    domString += `    <p class="card-text">${quacks[i].socialStatus}</p>`;
    domString += `    <p class="card-text">${quacks[i].diet}</p>`;
    domString += '  </div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('pond', domString);
};

const choseColor = (e) => {
  const buttonId = e.target.id;
  const selectedDucks = [];
  for(let i = 0; i < ducks.length; i++){
    if(ducks[i].color === buttonId){
      selectedDucks.push(ducks[i]);
    }
  }
  duckPrinter(selectedDucks);
};

const choseGender = (e) => {
  const buttonId = e.target.id;
  const selectedDucks = [];
  for(let i = 0; i < ducks.length; i++){
    if(ducks[i].gender === buttonId){
      selectedDucks.push(ducks[i]);
    }
  }
  duckPrinter(selectedDucks);
};

const choseRubber = () => {
  const selectedDucks = [];
  for(let i = 0; i < ducks.length; i++){
    if(ducks[i].isRubber){
      selectedDucks.push(ducks[i]);
    }
  }
  duckPrinter(selectedDucks);
};


const events = () => {
  document.getElementById('blue').addEventListener('click', choseColor);
  document.getElementById('pink').addEventListener('click', choseColor);
  document.getElementById('brown').addEventListener('click', choseColor);
  document.getElementById('female').addEventListener('click', choseGender);
  document.getElementById('male').addEventListener('click', choseGender);
  document.getElementById('rubber').addEventListener('click', choseRubber);
};

const init = () => {
  duckPrinter(ducks);
  events();
};

init();