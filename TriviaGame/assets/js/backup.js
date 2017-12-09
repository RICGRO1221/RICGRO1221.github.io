//Trivia Game
//Week 5



//--------------- Restart Game ------------->


function restart() {
	var rightAns = 0;
	var wrongAns = 0;
	var clockRunning = false;
}


//------------- ASA the page loads Start Button --------->


window.onload = function() {
	$('#start').on('click', pickAnswer);
  	$('#start').on('click', function() {
  		$('#start').css('display', 'none');
  	});
  	restart();
};


//---------------- Variables/ Counters ----------------->


var rightAns = 0;
var wrongAns = 0;
var clockRunning = false;



//--------------- Questions ---------------->

var questions = {
	questOne: {
		quest: 'Here lies question one?',
		correct: {
			text: 'This is right',
			right: true
		},	
		optTwo: {
			text: 'This is your optTwo',
			right: false
		},
		optThree: {
			text: 'This is your optThree',
			right: false
		},
		optFour: {
			text: 'This is your optFour',
			right: false
		},
		displayed: false
	}
	,
	questTwo: {
		quest: 'Here lies question two?',
		correct: {
			text: 'This is right',
			right: true
		},
		optTwo: {
			text: 'This is your optTwo',
			right: false
		},
		optThree: {
			text:'This is your optThree',
			right: false
		},
		optFour: {
			text: 'This is your optFour',
			right: false
		},
		displayed: false
	}
	,
	questThree: {
		quest: 'Here lies question three?',
		correct: {
			text: 'This is right',
			right: true
		},
		optTwo: {
			text: 'This is your optTwo',
			right: false
		},
		optThree: {
			text: 'This is your optThree',
			right: false
		},
		optFour: {
			text: 'This is your optFour',
			right: false
		},
		displayed: false
	}
}


//----------- Select Random Questions ------------------>


var arrQuest = [questions.questOne.quest, questions.questTwo.quest, questions.questThree.quest];
var randomQuest = arrQuest[Math.floor(Math.random() * arrQuest.length)];


//------------ Shuffle answers to Pick -------------------------->


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arrAnsOne = [questions.questOne.correct.text, questions.questOne.optTwo.text, questions.questOne.optThree.text, questions.questOne.optFour.text];
var arrAnsTwo = [questions.questTwo.correct.text, questions.questTwo.optTwo.text, questions.questTwo.optThree.text, questions.questTwo.optFour.text];
var arrAnsThree = [questions.questThree.correct.text, questions.questThree.optTwo.text, questions.questThree.optThree.text, questions.questThree.optFour.text];
arrAnsOne = shuffle(arrAnsOne);
arrAnsTwo = shuffle(arrAnsTwo);
arrAnsThree = shuffle(arrAnsThree);


//----------- Display possible answers for the Question --------------->

function pickAnswer () {
	$('#question').html(randomQuest);
	if (randomQuest === questions.questOne.quest) {
		$('#ans-o').append(arrAnsOne[0]);
		$('#ans-t').append(arrAnsOne[1]);
		$('#ans-th').append(arrAnsOne[2]);
		$('#ans-f').append(arrAnsOne[3]);
	}else if (randomQuest === questions.questTwo.quest) {
		$('#ans-o').append(arrAnsOne[0]);
		$('#ans-t').append(arrAnsOne[1]);
		$('#ans-th').append(arrAnsOne[2]);
		$('#ans-f').append(arrAnsOne[3]);
	}else if (randomQuest === questions.questThree.quest) {
		$('#ans-o').append(arrAnsOne[0]);
		$('#ans-t').append(arrAnsOne[1]);
		$('#ans-th').append(arrAnsOne[2]);
		$('#ans-f').append(arrAnsOne[3]);
	};
}


//------------ User clicks an option Dislpay Correct or Incorrect ----------------->



$('#ans-o').on('click', function () {
	if(arrAnsOne[0] === questions.questOne.correct.text || arrAnsOne[0] === questions.questTwo.correct.text || arrAnsOne[0] === questions.questThree.correct.text || arrAnsOne[0] === questions.questThree.correct.text) {
		right.show('YOURE RIGHT!!!!!!!!!!!!!!');
        pickAnswer();
        setTimeout( function () {
            nextQuestion();
        }, 1300);
	}else{
		wrong.show('Try Again!!!!!!!!!!!!!!');
	}
});

$('#ans-t').on('click', function () {
	if(arrAnsOne[1] === questions.questOne.correct.text || arrAnsOne[1] === questions.questTwo.correct.text || arrAnsOne[1] === questions.questThree.correct.text || arrAnsOne[1] === questions.questThree.correct.text) {
		right.show('YOURE RIGHT!!!!!!!!!!!!!!');
		pickAnswer();
		setTimeout( function () {
            nextQuestion();
        }, 1300);
	}else{
		wrong.show('Try Again!!!!!!!!!!!!!!');
	}
});

$('#ans-th').on('click', function () {
	if(arrAnsOne[2] === questions.questOne.correct.text || arrAnsOne[2] === questions.questTwo.correct.text || arrAnsOne[2] === questions.questThree.correct.text || arrAnsOne[2] === questions.questThree.correct.text) {
		right.show('YOURE RIGHT!!!!!!!!!!!!!!');
		
		setTimeout( function () {
            nextQuestion();
        }, 1300);
	}else{
		wrong.show('Try Again!!!!!!!!!!!!!!');
	}
});

$('#ans-f').on('click', function () {
	if(arrAnsOne[3] === questions.questOne.correct.text || arrAnsOne[3] === questions.questTwo.correct.text || arrAnsOne[3] === questions.questThree.correct.text || arrAnsOne[3] === questions.questThree.correct.text) {
		right.show('YOURE RIGHT!!!!!!!!!!!!!!');
		setTimeout( function () {
            nextQuestion();
            pickAnswer();
        }, 1300);
	}else{
		wrong.show('Try Again!!!!!!!!!!!!!!');
	}
});

console.log(arrQuest);

//----------------------- Alert Try Again -------------------------->


var wrong = {
    show: function(content) {
        $('#wrong').html(content);
        setTimeout( function () {
            $('#wrong').html('');
        }, 1000);
    }
};

var right = {
	show: function (content) {
		$('#right').html(content);
		setTimeout( function () {
			$('#right').html('');
		}, 500);
	}
};


//------- If answer is correct or Time runs out Display next question ----->


function nextQuestion() {	
		if (randomQuest === questions.questOne.quest) {
			arrQuest = arrQuest.splice(0,1);
			setTimeout( function() {
			}, 1000);
			$('#question').append(randomQuest[0]);
			
		}else if (randomQuest === questions.questTwo.quest) {
			arrQuest = arrQuest.splice(1,1);
			setTimeout( function() {
			}, 1000);
			$('#question').append(randomQuest[0]);
		}else if (randomQuest === questions.questThree.quest) {
			arrQuest = arrQuest.splice(2,1);
			setTimeout( function() {
			}, 1000);
			$('#question').append(randomQuest[0]);
		};
}