const inputBox = document.getElementById('toTranslate');
const buttons = document.getElementsByClassName('translator');
const outputBox = document.getElementById('output');


const spanish = {
    "dinosaurs": "dinosaurios",
    "and": "y",
    "cats": "gatos",
    "are": "son",
    "cool": "guay"
};

const french = {
    "dinosaurs": "dinosaures",
    "and": "et",
    "cats": "chats",
    "are": "sont",
    "cool": "cool"
};

const german = {
    "dinosaurs": "Dinosaurier",
    "and": "uns",
    "cats": "Katzen",
    "are": "sind",
    "cool": "cool"
};

for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener("click", (event) => {
        let input = inputBox.value.toLowerCase();
        let domOutput = '';
        if (event.target.id == 'spanish') {
            domOutput = spanish[input];
        } else if (event.target.id == 'french') {
            domOutput = french[input];
        } else if (event.target.id == 'german') {
            domOutput = german[input];
        }
        outputBox.innerHTML = domOutput;
    });
};