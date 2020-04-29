document.querySelector('.puzzle-1').style.display = 'none';
document.querySelector('.puzzle-2').style.display = 'none';
document.querySelector('.puzzle-3').style.display = 'none';
document.querySelector('.puzzle-4').style.display = 'none';
document.querySelector('.incorrect').style.display = 'none';
document.querySelector('.correct').style.display = 'none';
document.querySelector('.lost').style.display = 'none';
document.querySelector('.win').style.display = 'none';
document.querySelector('.hangmanwin').style.display = 'none';
document.querySelector('.again').style.display = 'none';
var random = Math.floor(Math.random() * 4) + 1
var incorrect, hangman;
var strClue = "";
if (random == 1) {
    strClue = 'schools out for corona'
} else if (random == 2) {
    strClue = 'the dog played with his bone'
} else if (random == 3) {
    strClue = 'whats that on my arm'
} else if (random == 4) {
    strClue = 'the rabbit dug a very big hole'
}
var strGuesses = "";

console.log("strClue = " + strClue);
console.log("strGuesses = " + strGuesses);
console.log("mask = " + mask(strClue, strGuesses));

function mask(clue, guesses) {
    var g = strGuesses.toUpperCase() + " ";
    var c = strClue.toUpperCase();
    var mask = "";
    for (var i = 0; i < c.length; i++) {
        if (g.includes(c.charAt(i))) {
            mask = mask + c.charAt(i);
        } else {
            mask = mask + "-";
        }        
    }
    if (mask.includes('-')) {
        console.log('proceed')
    } else {
        win();
    }
    document.querySelector('.puzzle-' + random).textContent = mask;
    return mask;
}
incorrect = 0
hangman = document.querySelector('.hangman')
hangman.src = 'images/hangman' + incorrect + '.png';
document.querySelector('.puzzle-' + random).style.display = 'block';

function win() {
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
    document.querySelector('.g').style.display = 'none';
    document.querySelector('.h').style.display = 'none';
    document.querySelector('.i').style.display = 'none';
    document.querySelector('.j').style.display = 'none';
    document.querySelector('.k').style.display = 'none';
    document.querySelector('.l').style.display = 'none';
    document.querySelector('.m').style.display = 'none';
    document.querySelector('.n').style.display = 'none';
    document.querySelector('.o').style.display = 'none';
    document.querySelector('.p').style.display = 'none';
    document.querySelector('.q').style.display = 'none';
    document.querySelector('.r').style.display = 'none';
    document.querySelector('.s').style.display = 'none';
    document.querySelector('.t').style.display = 'none';
    document.querySelector('.u').style.display = 'none';
    document.querySelector('.v').style.display = 'none';
    document.querySelector('.w').style.display = 'none';
    document.querySelector('.x').style.display = 'none';
    document.querySelector('.y').style.display = 'none';
    document.querySelector('.z').style.display = 'none';
    document.querySelector('.puzzle-1').style.display = 'none';
    document.querySelector('.puzzle-2').style.display = 'none';
    document.querySelector('.puzzle-3').style.display = 'none';
    document.querySelector('.puzzle-4').style.display = 'none';
    document.querySelector('.incorrect').style.display = 'none';
    document.querySelector('.correct').style.display = 'none';
    document.querySelector('.win').style.display = 'block';
    document.querySelector('.hangman').style.display = 'none';
    document.querySelector('.hangmanwin').style.display = 'block';
    document.querySelector('.again').style.display = 'block';
}

function wrong () {
    document.querySelector('.instructions').style.display = 'none';
    document.querySelector('.correct').style.display = 'none';
    document.querySelector('.incorrect').style.display = 'block';
    incorrect += 1
    hangman = document.querySelector('.hangman')
    hangman.src = 'images/hangman' + incorrect + '.png';
    if (incorrect == 6) {
        document.querySelector('.lost').style.display = 'block';
        lost()
    }
}

function right () {
    document.querySelector('.instructions').style.display = 'none';
    document.querySelector('.correct').style.display = 'block';
    document.querySelector('.incorrect').style.display = 'none';
}

function lost () {
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
    document.querySelector('.g').style.display = 'none';
    document.querySelector('.h').style.display = 'none';
    document.querySelector('.i').style.display = 'none';
    document.querySelector('.j').style.display = 'none';
    document.querySelector('.k').style.display = 'none';
    document.querySelector('.l').style.display = 'none';
    document.querySelector('.m').style.display = 'none';
    document.querySelector('.n').style.display = 'none';
    document.querySelector('.o').style.display = 'none';
    document.querySelector('.p').style.display = 'none';
    document.querySelector('.q').style.display = 'none';
    document.querySelector('.r').style.display = 'none';
    document.querySelector('.s').style.display = 'none';
    document.querySelector('.t').style.display = 'none';
    document.querySelector('.u').style.display = 'none';
    document.querySelector('.v').style.display = 'none';
    document.querySelector('.w').style.display = 'none';
    document.querySelector('.x').style.display = 'none';
    document.querySelector('.y').style.display = 'none';
    document.querySelector('.z').style.display = 'none';
    document.querySelector('.puzzle-1').style.display = 'none';
    document.querySelector('.puzzle-2').style.display = 'none';
    document.querySelector('.puzzle-3').style.display = 'none';
    document.querySelector('.puzzle-4').style.display = 'none';
    document.querySelector('.incorrect').style.display = 'none';
    document.querySelector('.correct').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
}

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
})

if (random == 1) {
    string = 'schools out for corona';
} else if (random == 2) {
    string = 'the dog played with his bone';
} else if (random == 3) {
    string = 'whats that on my arm';
} else if (random = 4) {
    string = 'the rabbit dug a very big hole'
}

document.querySelector('.a').addEventListener('click', function (strClue) {
    if (string.includes('a')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.a').style.display = 'none';
    strGuesses = strGuesses + 'a'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.b').addEventListener('click', function (strClue) {
    if (string.includes('b')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.b').style.display = 'none';
    strGuesses = strGuesses + 'b'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.c').addEventListener('click', function () {
    if (string.includes('c')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.c').style.display = 'none';
    strGuesses = strGuesses + 'c'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.d').addEventListener('click', function () {
    if (string.includes('d')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.d').style.display = 'none';
    strGuesses = strGuesses + 'd'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.e').addEventListener('click', function () {
    if (string.includes('e')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.e').style.display = 'none';
    strGuesses = strGuesses + 'e'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.f').addEventListener('click', function () {
    if (string.includes('f')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.f').style.display = 'none';
    strGuesses = strGuesses + 'f'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.g').addEventListener('click', function () {
    if (string.includes('g')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.g').style.display = 'none';
    strGuesses = strGuesses + 'g'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.h').addEventListener('click', function () {
    if (string.includes('h')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.h').style.display = 'none';
    strGuesses = strGuesses + 'h'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.i').addEventListener('click', function () {
    if (string.includes('i')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.i').style.display = 'none';
    strGuesses = strGuesses + 'i'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.j').addEventListener('click', function () {
    if (string.includes('j')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.j').style.display = 'none';
    strGuesses = strGuesses + 'j'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.k').addEventListener('click', function () {
    if (string.includes('k')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.k').style.display = 'none';
    strGuesses = strGuesses + 'k'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.l').addEventListener('click', function () {
    if (string.includes('l')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.l').style.display = 'none';
    strGuesses = strGuesses + 'l'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.m').addEventListener('click', function () {
    if (string.includes('m')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.m').style.display = 'none';
    strGuesses = strGuesses + 'm'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.n').addEventListener('click', function () {
    if (string.includes('n')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.n').style.display = 'none';
    strGuesses = strGuesses + 'n'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.o').addEventListener('click', function () {
    if (string.includes('o')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.o').style.display = 'none';
    strGuesses = strGuesses + 'o'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.p').addEventListener('click', function () {
    if (string.includes('p')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.p').style.display = 'none';
    strGuesses = strGuesses + 'p'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.q').addEventListener('click', function () {
    if (string.includes('q')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.q').style.display = 'none';
    strGuesses = strGuesses + 'q'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.r').addEventListener('click', function () {
    if (string.includes('r')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.r').style.display = 'none';
    strGuesses = strGuesses + 'r'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.s').addEventListener('click', function () {
    if (string.includes('s')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.s').style.display = 'none';
    strGuesses = strGuesses + 's'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.t').addEventListener('click', function () {
    if (string.includes('t')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.t').style.display = 'none';
    strGuesses = strGuesses + 't'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.u').addEventListener('click', function () {
    if (string.includes('u')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.u').style.display = 'none';
    strGuesses = strGuesses + 'u'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.v').addEventListener('click', function () {
    if (string.includes('v')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.v').style.display = 'none';
    strGuesses = strGuesses + 'v'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.w').addEventListener('click', function () {
    if (string.includes('w')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.w').style.display = 'none';
    strGuesses = strGuesses + 'w'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.x').addEventListener('click', function () {
    if (string.includes('x')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.x').style.display = 'none';
    strGuesses = strGuesses + 'x'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.y').addEventListener('click', function () {
    if (string.includes('y')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.y').style.display = 'none';
    strGuesses = strGuesses + 'y'
    strMask = mask(strClue, strGuesses);
})

document.querySelector('.z').addEventListener('click', function () {
    if (string.includes('z')) {
        right();
    } else {
        wrong();
    }
    document.querySelector('.z').style.display = 'none';
    strGuesses = strGuesses + 'z'
    strMask = mask(strClue, strGuesses);
})


