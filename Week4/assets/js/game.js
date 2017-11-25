//StarWars

var playerChoosen = [];
var player = null;
var enemies = [];
var enBattle = [];
var hp = "";

//---------------Initialize Game------------>

function restartGame () {
	var playerChoosen = [];
	var player = null;
	var enemies = [];
}


//---------------Characters------------------>
var characters = [
	{
	name: '<h1>LUKE</h1>',
	hp: '<span>HP</span>' + 1000,
	attack: '<span>Att </span>' + Math.floor(Math.random() * 20) + 50,
	counterAtt: '<span>Catt: </span>' + Math.floor(Math.random() * 25) + 100,
	imgurl: './assets/images/enluke.jpg',
	id: 1,
	}
,

	{
	name: '<h1>CHEWBACCA</h1>',
	hp: '<span>HP</span>' + 1000,
	attack: '<span>Att </span>' + Math.floor(Math.random() * 25) + 100,
	counterAtt: 'Catt ' + Math.floor(Math.random() * 25) + 100,
	imgurl: './assets/images/enchew.jpg',
	id: 2,
	}
,

	{
	name: '<h1>BOBA FETT</h1>',
	hp: '<span>HP</span>' + 1000,
	attack: '<span>Att </span>' + Math.floor(Math.random() * 100) + 25,
	counterAtt: 'Catt ' + Math.floor(Math.random() * 25) + 100,
	imgurl: './assets/images/enboba.jpg',
	id: 3,
	}
,
	{
	name: '<h1>VADER</h1>',
	hp: '<span>HP</span>' + 2000,
	attack: '<span>Att </span>' + Math.floor(Math.random() * 25) + 100,
	counterAtt: 'Catt: ' + Math.floor(Math.random() * 25) + 100,
	imgurl: './assets/images/envader.jpg',
	id: 4,
	}
]
console.log (characters);


//---------------Player Menu----------------->



$('#pic-luke').mouseenter(
	function() {
    	$('#character').append('<img src = "./assets/images/lukestand.png">');
})

$('#pic-chew').mouseenter(
	function() {
    	$('#character').append('<img src = "./assets/images/lukestand.png">');
})

$('#pic-boba').mouseenter(
	function() {
    	$('#character').append('<img src = "./assets/images/lukestand.png">');
})

$('#pic-vader').mouseenter(
	function() {
    	$('#character').append('<img src = "./assets/images/lukestand.png">');
})

$('.pic').mouseleave(
	function() {
    	$('#character').empty();
})


//---------------Select Player------------------->

$('#pic-luke').click(function () { 
	playerChoosen.push(characters[0]);
	if (characters[0] == playerChoosen[0]) {
		enemies.push(characters[1]);
		enemies.push(characters[2]);
		enemies.push(characters[3]);
		$('#pick-enemy')
		$('.player-box').css('display', 'initial');
		$('.enemy-box').css('display', 'initial');
		$('#pick-player').css('display', 'none');
		$('#hp').html(characters[0].hp);
		$('#attack').html(characters[0].attack);
		$('#player-name').html(characters[0].name);
		$('#player-picked').css({'background-image': 'url(./assets/images/lukeleft.png)', 'background-repeat': 'no-repeat'});
		$('#att-btn').css({'background-image': 'url(./assets/images/iluke.jpg)', 'background-repeat': 'no-repeat'});
		$('#enone').css({'background-image': 'url(./assets/images/enchew.jpg)', 'background-repeat': 'no-repeat'});
		$('#entwo').css({'background-image': 'url(./assets/images/enboba.jpg)', 'background-repeat': 'no-repeat'});
		$('#enthree').css({'background-image': 'url(./assets/images/envader.jpg)', 'background-repeat': 'no-repeat'});
	}
})

$('#pic-chew').click(function () { 
	playerChoosen.push(characters[1]);
	if (characters[1] == playerChoosen[0]) {
		enemies.push(characters[0]);
		enemies.push(characters[2]);
		enemies.push(characters[3]);
		$('.player-box').css('display', 'initial');
		$('.enemy-box').css('display', 'initial');
		$('#pick-player').css('display', 'none');
		$('#hp').html(characters[1].hp);
		$('#attack').html(characters[1].attack);
		$('#player-name').html(characters[1].name);
		$('#player-picked').css({'background-image': 'url(./assets/images/chewleft.png)', 'background-repeat': 'no-repeat'});
		$('#att-btn').css({'background-image': 'url(./assets/images/ichew.jpg)', 'background-repeat': 'no-repeat'});
		$('#enone').css({'background-image': 'url(./assets/images/enboba.jpg)', 'background-repeat': 'no-repeat'});
		$('#entwo').css({'background-image': 'url(./assets/images/enluke.jpg)', 'background-repeat': 'no-repeat'});
		$('#enthree').css({'background-image': 'url(./assets/images/envader.jpg)', 'background-repeat': 'no-repeat'});
	}
})

$('#pic-boba').click(function () { 
	playerChoosen.push(characters[2]);
	if (characters[2] == playerChoosen[0]) {
		enemies.push(characters[0]);
		enemies.push(characters[1]);
		enemies.push(characters[3]);
		$('.player-box').css('display', 'initial');
		$('.enemy-box').css('display', 'initial');
		$('#pick-player').css('display', 'none');
		$('#hp').html(characters[2].hp);
		$('#attack').html(characters[2].attack);
		$('#player-name').html(characters[2].name);
		$('#player-picked').css({'background-image': 'url(./assets/images/bobaleft.png)', 'background-repeat': 'no-repeat'});
		$('#att-btn').css({'background-image': 'url(./assets/images/iboba.jpg)', 'background-repeat': 'no-repeat'});
		// for (var i = 0; i < enemies.length; i++) {
		// 	var img = $('<img id="sith">'); 
		// 	img.attr('src', enemies[i].imgurl);
		// 	img.appendTo('#pick-enemy');
		// }
		$('#enone').css({'background-image': 'url(./assets/images/enchew.jpg)', 'background-repeat': 'no-repeat'});
		$('#entwo').css({'background-image': 'url(./assets/images/enluke.jpg)', 'background-repeat': 'no-repeat'});
		$('#enthree').css({'background-image': 'url(./assets/images/envader.jpg)', 'background-repeat': 'no-repeat'});

	}
})

$('#pic-vader').click(function () { 
	playerChoosen.push(characters[3]);
	if (characters[3] == playerChoosen[0]) {
		enemies.push(characters[1]);
		enemies.push(characters[2]);
		enemies.push(characters[0]);
		$('.player-box').css('display', 'initial');
		$('.enemy-box').css('display', 'initial');
		$('#pick-player').css('display', 'none');
		$('#hp').html(characters[3].hp);
		$('#attack').html(characters[3].attack);
		$('#player-name').html(characters[3].name);
		$('#player-picked').css({'background-image': 'url(./assets/images/vaderleft.png)', 'background-repeat': 'no-repeat'});
		$('#att-btn').css({'background-image': 'url(./assets/images/ivader.jpg)', 'background-repeat': 'no-repeat'});
		$('#enone').css({'background-image': 'url(./assets/images/enchew.jpg)', 'background-repeat': 'no-repeat'});
		$('#entwo').css({'background-image': 'url(./assets/images/enboba.jpg)', 'background-repeat': 'no-repeat'});
		$('#enthree').css({'background-image': 'url(./assets/images/enluke.jpg)', 'background-repeat': 'no-repeat'});
	}
})
 
console.log(playerChoosen);
console.log(enemies);







//---------------Enemy Menu------------------>

$('#enone').on('mouseenter', function() {
		if (enemies[1] == characters[1] || enemies[0] == characters[1]) {
			$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/chewright.png">');

    	}else if (enemies[1] == characters[2]){
    		$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/bobaright.png">');
    }
})

$('#entwo').on('mouseenter', function() {
		if (enemies[0] == characters[0]) {
			$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/lukeright.png">');
    	}else {
    		$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/bobaright.png">');
    	}
})

$('#enthree').on('mouseenter', function() {
		if (enemies[2] == characters[3]) {
			$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/vaderright.png">');
    	}else if (enemies[2] == characters[0]) {
    		$('#may').css('display', 'none');
			$('h3').css('display', 'none');
    		$('#enemy-picked').append('<img src = "./assets/images/lukeright.png">');
    	}
})

$('.rival').mouseleave(
	function() {
		$('#enemy-picked').empty();
    	$('#may').css('display', 'initial');
		$('h3').css('display', 'initial');
})

	 



//---------------Select Enemy------------------>

$('#enone').click(function () { 
	enBattle[0].push(enemies[0]);
	if (enemies[1] == characters[1] || enemies[0] == characters[1]) {
		$('#hp').html(characters[1].hp);
		$('#attack').html(characters[0].attack);
		$('#player-name').html(characters[0].name);
		$('#enemy-picked').css({'background-image': 'url(./assets/images/chewright.png)', 'background-repeat': 'no-repeat'});
	} else if(enemies[0] == characters[2]){
		$('#hp').html(characters[1].hp);
		$('#attack').html(characters[0].attack);
		$('#player-name').html(characters[0].name);
		$('#enemy-picked').css({'background-image': 'url(./assets/images/bobaright.png)', 'background-repeat': 'no-repeat'});
	}
})

console.log(enBattle);
