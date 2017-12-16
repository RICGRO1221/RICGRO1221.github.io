//API APPLICATION
//WEEK 6



var topics = ['Jurassic Park','Back to the Future','Aliens'];
var newMovie = $('#user-pick').val();
var newTopics = [];

console.log(newMovie);
console.log(topics);


function createBtn() {
	for (var i = 0; i < topics.length; i++) {
		var btnTopic = $('<button>');
		btnTopic.addClass('btnClick');
		btnTopic.attr('data-movie', topics[i]);
		btnTopic.text(topics[i]);
		$('#btn-container').append(btnTopic);
		// var btnContainer = $('#btn-container');
		// var insertTopic = btnTopic.append(topics[i]);
		// btnContainer.append(insertTopic);
	}
};
	
	$('#searchBtn').on('click', function() {
		event.preventDefault();
		// $('#btn-container').empty();
		var btnClick = $('#user-pick').val().trim();
		topics.push(btnClick);
		createBtn();

	})
	
	createBtn();


//--------------- API CALL --------------------------------->


$(document).on('click', '.btnClick', function() {

	var movie = $(this).attr('data-movie');
	var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=NyfA7Sfa2zV8sOHIl1PLNTiMPJZkM8ca&limit=10';
	
	$('#gif-container').html('');


	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response){
		console.log(response);
		
		var results = response.data;

		for (var i = 0; i < 10; i++) {

			var gifDiv = $('<div>');
			var clip = $('<img id="image-btn">');
			clip.attr('src', results[i].images.fixed_height_still.url);
			clip.attr('data-animate', results[i].images.fixed_height.url);
			clip.attr('data-still', results[i].images.fixed_height_still.url);
			// clip.attr('data-saga', btnTopic.attr('data-movie);
			 // clip.attr('data-state', 'still');
			var rating = response.data[i].rating;
			var r = $('<p>').text('rating: ' + rating);
			

			gifDiv.append(r);
			gifDiv.append(clip);
			$('#gif-container').append(gifDiv);
		}

		$(document).on('click', '#image-btn', function(){
			var state = $(this).attr('data-state');
			console.log(this);
			if(state === 'still') {
				$(this).attr('src', $(this).attr('data-animate'));
				$(this).attr('data-state', 'animate');
				
			}else {
				$(this).attr('src', $(this).attr('data-still'));
				$(this).attr('data-state', 'still');
				
			}
		});
	});
});

