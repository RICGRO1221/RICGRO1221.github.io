//Created by Ricardo 
//Hangman game v.1
//Date: 11121\\

var words = ['cat', 'dogo', 'pupper'];
var randomWord = Math.floor(Math.random() * words.length);
var wordToGuess = words[randomWord];
var hiddenWord = [];




function generateUnderscore() {
    for (var i = 0; i < wordToGuess.length; i++) {
        hiddenWord.push('_');
    }
}
generateUnderscore()
console.log(hiddenWord);
console.log(wordToGuess);

document.onkeyup = function(event) {
        var userGuess = event.key;
        var correctGuess = [];
        var wrongGuess = [];
        var guessCount = 12;
        

        console.log(userGuess);
        console.log(guessCount);


        if (wordToGuess.indexOf(userGuess) > -1) {
            for (var i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === userGuess) {
                    hiddenWord[i] = userGuess;
                    console.log(hiddenWord);
                	}
            	}
            } else {
	            wrongGuess.push(userGuess);
	            guessCount = guessCount - 1;
	            console.log(wrongGuess);
	            console.log(guessCount);
	        }
        }

	  


        /*var array = ['a', 'b', 'a', 'c', 'a', 'd'];
        var element = 'a';
        var idx = array.indexOf(element);*/
































