function writeToDom(input, id){
    document.getElementById(id).innerHTML += input;
}


// CHALLENGE #1 with forEach
function challenge1b(input){
    var words = input.toLowerCase().split(' ');
    var best = findBestWord(words);
    writeToDom(best.word, "challenge-1b");
}

function findBestWord(words){
    var bestWord = { score: 0 };
    words.forEach(function(word){
        score = 0;
        word.split().forEach(function(char){
            var letterCode = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            score += (letterCode >= 1 || letterCode <= 26) ? letterCode: 0;
        });
        if (score > bestWord.score) {
            bestWord.score = score;
            bestWord.word = word;
        }
    });
    return bestWord;
}

challenge1b("jumbo shrimp");

// CHALLENGE #3 with Sort Method

function challenge3b(input){
    var unique = findUnique(input);
    writeToDom(unique, "challenge-3b");
}

function findUnique(array){
    array.sort(function(a, b){ return a - b });
    if (array[0]===array[1]){
        return input3b.pop();
    } else {
        return element[0];
    }
}

var input3b = [ 1, 1, 7, 1, 1, 1, 1 ];  // 2
challenge3b(input3b);

// CHALLENGE #4 with map

function challenge4b(input){
    var doubled = double(input);
    writeToDom(doubled, "challenge-4b");
}
function double(nums){
    var answer4b = nums.map(function(item){
        return item * 2;
    });
    return answer4b;
}

challenge4b([ 3, 8, 1, 2, 4, 12 ]);

// CHALLENGE #5 with Filter
function challenge5b(array1, array2){
    var answer = filter(array1, array2);
    writeToDom(answer, "challenge-5b");
}

function filter(one, two){
    return one.filter(function(num){
        return two.indexOf(num) === -1;
    });
}

challenge5b([1, 2, 4, 7, 5, 9], [5, 9, 2])

// CHALLENGE #6 with includes

function challenge6b(input){
    var missing = findMissing(input);
    writeToDom(missing, "challenge-6b");
}

function findMissing(nums){
    for (var i = 0; i < input6b.length + 1; i++){
        if (!input6b.includes(input6b[i])){
            return i;
        }
    }
}
var input6b = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
challenge6b(input6b);

/// OBJECTS ///

// CHALLENGE #1 with reduce

function challenge1b_obj(players){
    findTotals(players);
    var winner = findWinner(players);
    var text = userFriendlyText(winner);
    writeToDom(text, "challenge-obj-1b");
}

function findTotals(players){
    players.forEach(function(player){
        player.total = player.scores.reduce(function(prev, curr){ return prev + curr });
    });
}

function findWinner(players){
    var winner = { total: 0 }
    players.forEach(function(player){
        if (player.total <= 100 && player.total > winner.total){
            winner = player;
        }
    });
    return winner;
}

function userFriendlyText(winner){
    return winner.name + " with a score of " + winner.total;
}

var players = [ { name: "Bob", scores: [10, 65] },
                { name: "Bill", scores: [90, 5] },
                { name: "Charlie", scores: [40, 55] }
              ]; // Displays "Bill"
challenge1b_obj(players);
