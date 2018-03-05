// CHALLENGE #1
var challengeOneInput = "jumbo shrimp"
var words = challengeOneInput
    .toLowerCase()
    .split(' ');
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
        score += (letterCode >= 1 || letterCode <= 26)
            ? letterCode
            : 0;
    }
    if (score > bestScore) {
        bestScore = score;
        bestWord = word;
    }
}
document
    .getElementById("challenge-1")
    .innerHTML += bestWord;

// CHALLENGE #1 with forEach
var challengeOneInput = "jumbo shrimp"
var words = challengeOneInput
    .toLowerCase()
    .split(' ');
var bestScore = 0;
var bestWord = '';
var word,
    score,
    char;

words.forEach(function (word) {
    score = 0;
    word
        .split()
        .forEach(function (char) {
            var letterCode = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            score += (letterCode >= 1 || letterCode <= 26)
                ? letterCode
                : 0;
        });
    if (score > bestScore) {
        bestScore = score;
        bestWord = word;
    }
});
document
    .getElementById("challenge-1b")
    .innerHTML += bestWord;

// CHALLENGE #3

var input = [
    1,
    1,
    1,
    2,
    1,
    1
]; // 2
var repeater,
    unique;

if (input[0] === input[input.length - 1]) {
    repeater = input[0];
} else if (input[0] === input[1]) {
    repeater = input[i];
}

for (var i = 0; i < input.length; i++) {
    if (input[i] !== repeater) {
        unique = input[i];
    }
}

document
    .getElementById("challenge-3")
    .innerHTML += unique;

// CHALLENGE #3 with Sort Method
var element3b = document.getElementById("challenge-3b");

input.sort(function (a, b) {
    return a - b
});
if (input[0] === input[1]) {
    element3b.innerHTML += input.pop();
} else {
    element3b.innerHTML += element[0];
}

// CHALLENGE #5
var array1 = [
    1,
    2,
    4,
    7,
    5,
    9
];
var array2 = [5, 9, 2];
var finalArray = array1.slice();

for (var a = 0; a < array1.length; a++) {
    for (var b = 0; b < array2.length; b++) {
        if (array1[a] === array2[b]) {
            var index = finalArray.indexOf(array1[a]);
            finalArray.splice(index, 1);
        }
    }
}
document
    .getElementById("challenge-5")
    .innerHTML += finalArray;

// CHALLENGE #5 with Filter
var array1 = [
    1,
    2,
    4,
    7,
    5,
    9
];
var array2 = [5, 9, 2];

var finalArray = array1.filter(function (num) {
    return array2.indexOf(num) === -1;
})

document
    .getElementById("challenge-5b")
    .innerHTML += array1;

// CHALLENGE #7

var numBeggers = 3;
var offerings = [1, 2, 3, 4, 5];
var result = [];
// first one takes [1, 4]=5 second one takes [2, 5]=7 second one takes [3]=3
// display [5, 7, 3]
function beggars(values, n) {
    var final = [];
    for (var i = n; 0 < n; i--) {
        values.forEach((value, index) => {
            var finalIndex = i - n;
            if (index % i === 0) {
                final[finalIndex] += value
            }
        })
    }
    return final;
}

beggars(offerings, numBeggers);