//RPS MULTIPLAYER
//RICARDO
//WK7

//---------------------Rock Paper Scissors----------------------------->

var creator = 'happy';
var joiner = 'surprised';

function comparePhotos(a, b) {
    if (a === 'happy' && b === 'mad') {
        return 'Creator Wins!'
    } else if (a === 'mad' && b === 'mad') {
        return 'It\'s a Draw!'
    } else if (a === 'surprised' && b === 'mad') {
        return 'Joiner Wins!'
    } else if (a === 'happy' && b === 'happy') {
        return 'It\'s a Draw!'
    } else if (a === 'mad' && b === 'happy') {
        return 'Joiner Wins!'
    } else if (a === 'surprised' && b === 'happy') {
        return 'Creator Wins!'
    } else if (a === 'happy' && b === 'surprised') {
        return 'Joiner Wins!'
    } else if (a === 'mad' && b === 'surprised') {
        return 'Creator Wins!'
    } else {
        return 'It\'s a Draw!'
    };
}

console.log(comparePhotos(creator, joiner));



//--------------- Setting Media ----------------------------->
$('.camera-btn').on('click', function() {
	$('.camera-btn').remove();
     pic();
});

function pic() {
    'use strict';
    var video = document.querySelector('video'),
        canvas;
    /**
     *  generates a still frame image from the stream in the <video>
     *  appends the image to the <body>
     */
   
	    function takeSnapshot() {
	        var img = document.querySelector('img') || document.createElement('img');
	        var context;
	        var width = video.offsetWidth,
	            height = video.offsetHeight;

	        canvas = canvas || document.createElement('canvas');
	        canvas.width = width;
	        canvas.height = height;

	        context = canvas.getContext('2d');
	        context.drawImage(video, 0, 0, width, height);

	        img.src = canvas.toDataURL('image/png');
	        $('.fieldA').append(img);
	    }


    // use MediaDevices API
    // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    if (navigator.mediaDevices) {
        // access the web cam
        navigator.mediaDevices.getUserMedia({ video: true })
            // permission granted:
            .then(function(stream) {
                video.srcObject = stream;
                video.addEventListener('click', takeSnapshot);
            })
            // permission denied:
            .catch(function(error) {
                    document.body.textContent = 'Could not access the camera. Error: ' + error.name;
            })
    }
};