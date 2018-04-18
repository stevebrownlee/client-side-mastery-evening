// PART 1: Translator
// const inputBox = document.getElementById('toTranslate').value;
// const buttons = document.getElementsByClassName('translator');
// const outputBox = document.getElementById('output');


// const spanish = {
//     "dinosaurs": "dinosaurios",
//     "and": "y",
//     "cats": "gatos",
//     "are": "son",
//     "cool": "guay"
// };

// const french = {
//     "dinosaurs": "dinosaures",
//     "and": "et",
//     "cats": "chats",
//     "are": "sont",
//     "cool": "cool"
// };

// const german = {
//     "dinosaurs": "Dinosaurier",
//     "and": "uns",
//     "cats": "Katzen",
//     "are": "sind",
//     "cool": "cool"
// };

// for (let i = 0; i < buttons.length; i++ ) {
//     buttons[i].addEventListener("click", (event) => {
//         let input = inputBox.value.toLowerCase();
//         let domOutput = '';
//         if (event.target.id == 'spanish') {
//             domOutput = spanish[input];
//         } else if (event.target.id == 'french') {
//             domOutput = french[input];
//         } else if (event.target.id == 'german') {
//             domOutput = german[input];
//         }
//         outputBox.innerHTML = domOutput;
//     });
// };

// Part 2: Who Brought In Pie
const students = [
    {
        avatar: "https://robohash.org/inciduntsapientetenetur.png?size=100x100&set=set1",
        firstName: "Marinna",
        lastName: "Olliver",
        catchPhrase: "Optional global adapter"
    },
    {
        avatar: "https://robohash.org/facereinventoreexpedita.png?size=100x100&set=set1",
        firstName: "Shalne",
        lastName: "Roddell",
        catchPhrase: "Vision-oriented optimizing installation"
    },
    {
        avatar: "https://robohash.org/sintquasnam.png?size=100x100&set=set1",
        firstName: "Kamila",
        lastName: "Girardey",
        catchPhrase: "Ergonomic human-resource toolset"
    },
    {
        avatar: "https://robohash.org/autautfugiat.png?size=100x100&set=set1",
        firstName: "Conn",
        lastName: "Bemment",
        catchPhrase: "Mandatory 4th generation model"
    },
    {
        avatar: "https://robohash.org/inciduntameteum.png?size=100x100&set=set1",
        firstName: "Jeanelle",
        lastName: "Inglesent",
        catchPhrase: "Configurable value-added architecture"
    },
    {
        avatar: "https://robohash.org/vitaequiafugiat.png?size=100x100&set=set1",
        firstName: "Xymenes",
        lastName: "Nickols",
        catchPhrase: "Virtual coherent standardization"
    },
    {
        avatar: "https://robohash.org/oditexassumenda.png?size=100x100&set=set1",
        firstName: "Mandel",
        lastName: "Haycox",
        catchPhrase: "Balanced zero tolerance throughput"
    },
    {
        avatar: "https://robohash.org/ipsamnamiusto.png?size=100x100&set=set1",
        firstName: "Salim",
        lastName: "Brunker",
        catchPhrase: "Synergized impactful middleware"
    },
    {
        avatar: "https://robohash.org/quiaofficiaullam.png?size=100x100&set=set1",
        firstName: "Melanie",
        lastName: "Ivain",
        catchPhrase: "Multi-channelled solution-oriented artificial intelligence"
    }
];

const stringBuilder = (studentArray) => {
    let domString = ``;
    studentArray.forEach((student) => {
        domString += `<div class="card">`;
        domString +=     `<h1>${student.firstName} ${student.lastName}</h1>`;
        domString +=     `<img src="${student.avatar}">`;
        domString +=     `<p>${student.catchPhrase}</p>`;
        domString +=     `<button class="card-button">Brought Pie</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
}

const printToDom = (stringToPrint, elementToPrintTo) => {
    let printTo = document.getElementById(elementToPrintTo);
    printTo.innerHTML += stringToPrint;
};

const addEventListeners = () => {
    const buttons = document.getElementsByClassName('card-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', changeNameToGreen);
    }
}

const changeNameToGreen = (event) => {
    let card = event.target.parentNode;
    let title = card.childNodes[0];
    title.classList.add('green');
}

const startApplication = () => {
    stringBuilder(students);
    addEventListeners();
}

startApplication();