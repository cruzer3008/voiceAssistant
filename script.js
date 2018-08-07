try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
// var notes = getAllNotes();
// renderNotes(notes);



/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
function clearTranscript(){
	noteContent = " ";
}

$("start-record-btn").click(function(){
  
});

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
	if(transcript.includes("red"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/red.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("blue"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/blue.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("green"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/green.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("purple"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/purple.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("orange"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/orange.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("white"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/white.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("turn off"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/off.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("switch off"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/off.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("switch on"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/white.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("turn on"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/white.jpg");
    }).fadeIn(500);
  }
  if(transcript.includes("of"))
  {
    $("#bulbPhoto").fadeOut(500, function() {
    $("#bulbPhoto").attr("src","images/off.jpg");
    }).fadeIn(500);
  }
  
	
};



recognition.onstart = function() { 
  instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})
