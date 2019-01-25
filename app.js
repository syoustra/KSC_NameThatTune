var songTitles = [
"Mario",
"Yoshi",
"Zelda",
"Rick Rollin",
"Ernie",
"Alligator King",
"Simpsons",
"Scooter",
// "song9",
// "song10"
];
// console.log(songTitles);

// var selectedSong = songTitles[Math.floor(Math.random() * songTitles.length)];
// console.log(selectedSong);

// document.getElementById("playedSong").innerHTML = "Can you guess " + selectedSong + "?";


//shuffle formula from https://alvinalexander.com/source-code/javascript-multiple-random-unique-elements-from-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var winLoseText;
var questionTotal;
var questionsAsked;
questionsAsked = 0;
questionTotal = 5;

function nextQuestion() {
  //Select the right and wrong songs for this question
  shuffle(songTitles);

  var selectedSong = songTitles.pop();
  var wrongSongs = songTitles.slice(0,3);
  console.log("Correct Song: " + selectedSong);
  console.log("Wrong Choices: " + wrongSongs.toString());
  var songChoices = wrongSongs.push(selectedSong);
  songChoices = shuffle(wrongSongs);
  console.log("Options Seen By Player: " + songChoices.toString());
  console.log("Current array length: " + songTitles.length);

  var songURL;
  function getSongURL(selectedSong) {
    switch (selectedSong) {
      case "Mario":
      songURL = "ListentoGirlPlaysSuperMarioThemeSongonAncientChineseInstrument.mp3";
      break;
      case "Yoshi":
      songURL = "4-10-OverworldBGM.mp3";
      break;
      case "Zelda":
      songURL = "01TitleTheme.mp3";
      break;
      case "Rick Rollin":
      songURL = "NeverGonnaGiveYouUp.mp3";
      break;
      case "Ernie":
      songURL = "idontwanttoliveonthemoon.mp3";
      break;
      case "Alligator King":
      songURL = "alligator_king.mp3";
      break;
      case "Simpsons":
      songURL = "TheSimpsons.mp3";
      break;
      case "Scooter":
      songURL = "Muppets-1993-MuppetHits-08-SimonSmithandtheAmazingDancingBear.mp3";
      break; 
    }
  }

  getSongURL(selectedSong);
  // alert(songURL);

  //Display the song options
  // document.getElementById("playedSong").innerHTML = "The song to be played is " + selectedSong + " with file located at " + songURL;

  document.getElementById("choice1").innerHTML = "1. " + wrongSongs[0];
  document.getElementById("choice2").innerHTML = "2. " + wrongSongs[1];
  document.getElementById("choice3").innerHTML = "3. " + wrongSongs[2];
  document.getElementById("choice4").innerHTML = "4. " + wrongSongs[3];

  //Listen for player guesses
  // window.addEventListener("keydown", checkKeyPressed);

  // function checkKeyPressed(e) {
  //     if (e.keyCode == "49") {
  //         alert("Option 1 is selected");
  //     } else if (e.keyCode == "50") {
  //         alert("Option 2 is selected");
  //     } else if (e.keyCode == "51") {
  //         alert("Option 3 is selected");
  //     } else if (e.keyCode == "52") {
  //         alert("Option 4 is selected");
  //     }
  // }


// -------------------------------------------------------------- MUSIC PLAYER------------------------//
var musicPlayer;
var songToPlay;
var timePlayed;
var songTimer;

songToPlay = document.getElementById("songSource");
songToPlay.src = songURL;

musicPlayer = document.getElementById("musicPlayer");
musicPlayer.load();

songTimer = 0;
function playSong() {
  musicPlayer.play();

 document.getElementById("playerState").innerHTML = "Music is playing; click to pause";
  document.getElementById("timePlayed").style.visibility = "hidden";
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
}

function pauseSong() {
  musicPlayer.pause();
  songTimer = musicPlayer.currentTime;
  
  document.getElementById("timePlayed").innerHTML = "You listened to this song for " + songTimer + " seconds.";
    document.getElementById("timePlayed").style.visibility = "visible";
    document.getElementById("choiceListingDiv").style.visibility = "visible";

  document.getElementById("playerState").innerHTML = "Music is paused; click to continue playing";
}

function toggleSong() {
  if (musicPlayer.paused) {
    playSong();
  document.getElementById("playerState").innerHTML = "Music is playing; click to pause";
  } else {
    pauseSong();
    document.getElementById("playerState").innerHTML = "Music is paused; click to continue playing";
  }
 
}


addEventListener("keydown", function(event) {
    if (event.key == " ")
      playSong();
  });
  addEventListener("keyup", function(event) {
    if (event.key == " ")
      pauseSong();
  });

  addEventListener("keydown", function(event) {
    if (event.key == "p")
      toggleSong();
  })

  addEventListener("keydown", function(event) {
    if (event.key == "q")
      location.reload(true);
  })
// -------------------------------------------------------------- MUSIC PLAYER------------------------//




  ///////////////////NEATEN EVENTLISTENER//////////////////////////////////
  var playerGuess;
  // function checkGuess(playerGuess);
  function listenForKeypress() {

    window.onkeydown = function(e) {
      switch (e.keyCode) {
        case 49:
        // alert('1');
        playerGuess = 1;
        checkGuess(1);
        break;
        case 50:
        // alert('2');
        playerGuess = 2;
        checkGuess(2);
        break;
        case 51:
        // alert('3');
        playerGuess = 3;
        checkGuess(3);
        break;
        case 52:
        // alert('4');
        playerGuess = 4;
        checkGuess(4);
        break;
      }
      console.log("playerGuess = " + playerGuess);
    };
  }

  listenForKeypress();

  function checkGuess() {
    console.log(playerGuess);
    var guessedSong = songChoices[playerGuess-1];
    console.log(guessedSong);
    if (guessedSong != selectedSong) {
      // alert("YOU WIN!!!!!");
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
      winLoseText = "Oops, try again!"
      console.log(winLoseText);
            document.getElementById("playedSong").innerHTML = winLoseText;
            listenForKeypress();



      // document.getElementById("choice1").innerHTML = "1. By the Power";
      // document.getElementById("choice2").innerHTML = "2. of Greyskull...";
      // document.getElementById("choice3").innerHTML = "3. You are the";
      // document.getElementById("choice4").innerHTML = "4. Winner!!!!!";

    } else {
      // alert("*sad trombone*");
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
      winLoseText = "That's right! That was " + selectedSong + "!";
      console.log(winLoseText);

      // document.getElementById("choice1").innerHTML = "1. I";
      // document.getElementById("choice2").innerHTML = "2. Pity";
      // document.getElementById("choice3").innerHTML = "3. The";
      // document.getElementById("choice4").innerHTML = "4. Fool....";


      questionsAsked++;
    // alert(questionsAsked);
      document.getElementById("playedSong").innerHTML = winLoseText;
      songToPlay.src="";
      musicPlayer.load();
      moreQuestions();
    }
  }
}

nextQuestion();
function moreQuestions() {
  if (questionsAsked < questionTotal) {
    nextQuestion();
  } else {
    document.getElementById("playedSong").innerHTML = "Thanks for playing!";
  }
}


