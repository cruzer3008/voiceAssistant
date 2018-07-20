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
preloadImage("https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/js/images/rightback.png");
preloadImage("https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/js/images/leftback.png");
  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
	if(transcript.includes("red"))
	$("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/images/redBulb.png");
	if(transcript.includes("blue"))
		$("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/js/images/rightback.png");
	if(transcript.includes("green"))
		$("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/images/greenBulb.png");
	if(transcript.includes("yellow"))
		$("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/js/images/leftback.png");
	if(transcript.includes("turn on"))
	   	$("#bulbPhoto").attr("src","https://www.wink.com/img/product/philips-hue-lighting/variants/046677426361/hero_01.png");

	if(transcript.includes("switch on"))
	   $("#bulbPhoto").attr("src","https://www.wink.com/img/product/philips-hue-lighting/variants/046677426361/hero_01.png");
	if(transcript.includes("turn off"))
	   $("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/images/productfront.png");

	if(transcript.includes("switch off"))
	$("#bulbPhoto").attr("src","https://raw.githubusercontent.com/QwertyWorks/qwertyworks.github.io/master/Interns/images/productfront.png");
	if(transcript.includes("dim"))
	   alert("Dimmed");
	
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



/*-----------------------------
      App buttons and input 
------------------------------*/

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

// $('#save-note-btn').on('click', function(e) {
//   recognition.stop();

//   if(!noteContent.length) {
//     instructions.text('Could not save empty note. Please add a message to your note.');
//   }
//   else {
//     // Save note to localStorage.
//     // The key is the dateTime with seconds, the value is the content of the note.
//     saveNote(new Date().toLocaleString(), noteContent);

//     // Reset variables and update UI.
//     noteContent = '';
//     renderNotes(getAllNotes());
//     noteTextarea.val('');
//     instructions.text('Note saved successfully.');
//   }
      
// })





