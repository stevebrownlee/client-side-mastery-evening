// CHALLENGE #1
var challengeOneInput = "jumbo shrimp"
var words = challengeOneInput.toLowerCase().split(' ');
var bestScore = 0;
var bestWord = '';
var word;
var score;
var char;
for (var i = 0; i < words.length; i++) {
    word = words[i];
    score = 0;
    for (var j = 0; j < word.length; j++) {
        char = word[j];
        var letterCode = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        score += (letterCode >= 1 || letterCode <= 26) ? letterCode: 0;
    }
    if (score > bestScore) {
        bestScore = score;
        bestWord = word;
    }
}
document.getElementById("challenge-1").innerHTML += bestWord;

// CHALLENGE #1 with forEach
var challengeOneInput = "jumbo shrimp"
var words = challengeOneInput.toLowerCase().split(' ');
var bestScore = 0;
var bestWord = '';
var word, score, char;

words.forEach(function(word){
    score = 0;
    word.split().forEach(function(char){
        var letterCode = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        score += (letterCode >= 1 || letterCode <= 26) ? letterCode: 0;
    });
    if (score > bestScore) {
        bestScore = score;
        bestWord = word;
    }
});
document.getElementById("challenge-1b").innerHTML += bestWord;

// CHALLENGE #3

var input3 = [ 1, 1, 1, 2, 1, 1 ];  // 2
var repeater, unique;

if (input3[0] === input3[input3.length-1]) {
    repeater = input3[0];
} else if (input3[0] === input3[1]) {
    repeater = input3[i];
}

for (var i = 0; i < input3.length; i++){
    if (input3[i] !== repeater){
        unique = input3[i];
    }
}

document.getElementById("challenge-3").innerHTML += unique;

// CHALLENGE #3 with Sort Method
var element3b = document.getElementById("challenge-3b");

input3.sort(function(a, b){ return a - b });
if (input3[0]===input3[1]){
    element3b.innerHTML += input3.pop();
} else {
    element3b.innerHTML += element[0];
}

// CHALLENGE #4
var input4 = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var answer4 = [];
for (var i = 0; i < input4.length; i++){
    answer4[i] = input4[i] * 2;
}
document.getElementById("challenge-4").innerHTML += answer4;

// CHALLENGE #4 with map
var answer4b = [];
var answer4b = input4.map(function(item){
    return item * 2;
})
document.getElementById("challenge-4b").innerHTML += answer4b;

// CHALLENGE #5
var array1 = [1, 2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
var finalArray = array1.slice();

for (var a = 0; a < array1.length; a++){
    for (var b = 0; b < array2.length; b++){
        if (array1[a] === array2[b]){
            var index = finalArray.indexOf(array1[a]);
            finalArray.splice(index, 1);
        }
    }
}
document.getElementById("challenge-5").innerHTML += finalArray;

// CHALLENGE #5 with Filter
var array1 = [1, 2, 4, 7, 5, 9];
var array2 = [5, 9, 2];

var finalArray = array1.filter(function(num){
    return array2.indexOf(num) === -1;
})

document.getElementById("challenge-5b").innerHTML += finalArray;

/// OBJECTS ///

// CHALLENGE #1 with reduce

var players = [ { name: "Bob", scores: [10, 65] },
                { name: "Bill", scores: [90, 5] },
                { name: "Charlie", scores: [40, 55] }
              ]; // Displays "Bill"
var currentTotal = 0;
var winner = { total: 0 }

players.forEach(function(player){
    player.total = player.scores.reduce(function(prev, curr){ return prev + curr });
});

players.forEach(function(player){
    if (player.total <= 100 && player.total > winner.total){
        winner = player;
    }
});
document.getElementById("challenge-obj-1b").innerHTML += winner.name + " with " + winner.total;

/// FUNCTIONS ///

function writeToDom(input, id){
    document.getElementById(id).innerHTML += input;
}

// CHALLENGE #4 with splice

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

function challenge4(birds){
    var geeseIndexes = findGeese(birds);
    removeGeese(geeseIndexes, birds);
    writeToDom(birds.join(", "), "challenge-fxn-4b")
}

function findGeese(birds){
    indexes = [];
    geese.forEach(function(goose){
        if (birds.indexOf(goose) !== -1){
            indexes.push(birds.indexOf(goose));
        }
    });
    return indexes;
}

function removeGeese(geeseIndexes, birds){
    geeseIndexes.sort(function(a, b,){return b - a}).forEach(function(i){
        birds.splice(i, 1);
    });
}

challenge4(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]