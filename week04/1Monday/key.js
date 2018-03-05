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

// CHALLENGE #4
var input4 = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var answer4 = [];
for (var i = 0; i < input4.length; i++){
    answer4[i] = input4[i] * 2;
}
document.getElementById("challenge-4").innerHTML += answer4;

// CHALLENGE #5
var array1_4 = [1, 2, 4, 7, 5, 9];
var array2_4 = [5, 9, 2];
var finalArray = array1_4.slice();

for (var a = 0; a < array1_4.length; a++){
    for (var b = 0; b < array2_4.length; b++){
        if (array1_4[a] === array2_4[b]){
            var index = finalArray.indexOf(array1_4[a]);
            finalArray.splice(index, 1);
        }
    }
}
document.getElementById("challenge-5").innerHTML += finalArray;