var songTitles = [
 ["Africa", "Africa_by_Toto.mp3"],
 ["Come On, Eileen", "Come_On_Eileen!_by_Desy's_Midnight_Runners.mp3"],
 ["Born in the USA", "Born_in_the_U.S.A._by_Bruce_Springsteen_.mp3"],
 ["Relax", "Relax_by_Frankie_Goes_to_Hollywood_.mp3"],
 ["Tainted Love", "Tainted_Love_by_Soft_Cell.mp3"],
 ["When Doves Cry", "When_Doves_Cry_by_Prince.mp3"],
 ["SuperFreak", "super_freak_rick_james_(_lyrics_).mp3"],
 ["Take On Me", "a-Ha_-_Take_On_Me_[lyrics].mp3"],
 ["Alone", "alone_by_heart_with_lyrics.mp3"],
 ["It Takes Two", "It_Takes_Two_by_rob_base.mp3"]
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
var totalScore = 0;
var currentHighScore;
var storedHighScore;
var wrongGuess;


// storedHighScore = 50;
// localStorage.setItem("storedHighScore", storedHighScore);
console.log(localStorage.getItem("storedHighScore"));
if (localStorage.getItem("storedHighScore") !== null && localStorage.getItem("storedHighScore") !== ""
    && typeof(localStorage.getItem("storedHighScore") != "undefined")) {
  console.log("The current stored high score is " + localStorage.getItem("storedHighScore"));
} else {
  localStorage.setItem("storedHighScore", "0");
  console.log("Stored High Score has been initialized at 0");
}




function nextQuestion() {
  //Select the right and wrong songs for this question

  wrongGuess = 0;

  shuffle(songTitles);

  var selectedSong = songTitles.pop();
  //---------------------------------CHANGE FOR NUMBER OF CHOICES----------------------------//
  // var wrongSongs = songTitles.slice(0,3);
  var wrongSongs = songTitles.slice(0,2);
  console.log("Correct Song: " + selectedSong[0]);
  console.log("Wrong Choices: " + wrongSongs.toString());
  var songChoices = wrongSongs.push(selectedSong);
  songChoices = shuffle(wrongSongs);
  console.log("Options Seen By Player: " + songChoices.toString());
  console.log("Current array length: " + songTitles.length);

  var songURL;
  // function getSongURL(selectedSong) {
  //   switch (selectedSong) {
  //     case "Mario":
  //     songURL = "ListentoGirlPlaysSuperMarioThemeSongonAncientChineseInstrument.mp3";
  //     break;
  //     case "Yoshi":
  //     songURL = "4-10-OverworldBGM.mp3";
  //     break;
  //     case "Zelda":
  //     songURL = "01TitleTheme.mp3";
  //     break;
  //     case "Rick Rollin":
  //     songURL = "NeverGonnaGiveYouUp.mp3";
  //     break;
  //     case "Ernie":
  //     songURL = "idontwanttoliveonthemoon.mp3";
  //     break;
  //     case "Alligator King":
  //     songURL = "alligator_king.mp3";
  //     break;
  //     case "Simpsons":
  //     songURL = "TheSimpsons.mp3";
  //     break;
  //     case "Scooter":
  //     songURL = "Muppets-1993-MuppetHits-08-SimonSmithandtheAmazingDancingBear.mp3";
  //     break; 
  //   }
  // }

  // getSongURL(selectedSong);
  // alert(songURL);

  //Display the song options
  // document.getElementById("playedSong").innerHTML = "The song to be played is " + selectedSong + " with file located at " + songURL;

  document.getElementById("choiceListingDiv").style.visibility = "hidden";

  document.getElementById("choice1").innerHTML = "1. " + wrongSongs[0][0];
  document.getElementById("choice2").innerHTML = "2. " + wrongSongs[1][0];
  document.getElementById("choice3").innerHTML = "3. " + wrongSongs[2][0];
    //---------------------------------CHANGE FOR NUMBER OF CHOICES----------------------------//
  // document.getElementById("choice4").innerHTML = "4. " + wrongSongs[3][0];

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
var roundScore;
// var totalScore = 0;

start();
songToPlay = document.getElementById("songSource");
songToPlay.src = "songs\\" + selectedSong[1];
console.log(songToPlay);

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


  end();
  
  
  roundScore = 100 - (Math.round(songTimer)) - (Math.round(timeDiff)) - (wrongGuess * 5);
  // totalScore = totalScore + roundScore;
  document.getElementById("score").innerHTML = "Your elapsed time is " + timeDiff + " and your round score is " + roundScore;
  // + " and your total score is " + totalScore;


}

// function toggleSong() {
//   if (musicPlayer.paused) {
//     playSong();
//   document.getElementById("playerState").innerHTML = "Music is playing; click to pause";
//   } else {
//     pauseSong();
//     document.getElementById("playerState").innerHTML = "Music is paused; click to continue playing";
//   }
 
// }


addEventListener("keydown", function(event) {
    if (event.key == " ")
      playSong();
  });
  addEventListener("keyup", function(event) {
    if (event.key == " ")
      pauseSong();
  });

// ONLY WORKS FOR FIRST TIME?!?!?!?!?
  // addEventListener("keydown", function(event) {
  //   if (event.key == "p")
  //     toggleSong();
  // })

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
          //---------------------------------CHANGE FOR NUMBER OF CHOICES----------------------------//
        // case 52:
        // // alert('4');
        // playerGuess = 4;
        // checkGuess(4);
        // break;
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
      wrongGuess ++;
      console.log(winLoseText);
            document.getElementById("playedSong").innerHTML = winLoseText;
            listenForKeypress();

              songChoices = shuffle(wrongSongs);
  console.log("Options Seen By Player: " + songChoices.toString());
 document.getElementById("choice1").innerHTML = "1. " + wrongSongs[0][0];
  document.getElementById("choice2").innerHTML = "2. " + wrongSongs[1][0];
  document.getElementById("choice3").innerHTML = "3. " + wrongSongs[2][0];
    //---------------------------------CHANGE FOR NUMBER OF CHOICES----------------------------//
  // document.getElementById("choice4").innerHTML = "4. " + wrongSongs[3][0];




      // document.getElementById("choice1").innerHTML = "1. By the Power";
      // document.getElementById("choice2").innerHTML = "2. of Greyskull...";
      // document.getElementById("choice3").innerHTML = "3. You are the";
      // document.getElementById("choice4").innerHTML = "4. Winner!!!!!";

    } else {
      // alert("*sad trombone*");
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
      winLoseText = "That's right! That was " + selectedSong[0] + "!";
      console.log(winLoseText);

      // document.getElementById("choice1").innerHTML = "1. I";
      // document.getElementById("choice2").innerHTML = "2. Pity";
      // document.getElementById("choice3").innerHTML = "3. The";
      // document.getElementById("choice4").innerHTML = "4. Fool....";


      questionsAsked++;
    // alert(questionsAsked);
      totalScore = totalScore + roundScore;
      document.getElementById("playedSong").innerHTML = winLoseText 
        + " Your score for this question is " + roundScore
        + " and your total score so far is " + totalScore + "."
        + " You had " + wrongGuess + " wrong guesses."
        + " Press space for the next question.";
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

      currentHighScore = parseInt(localStorage.getItem("storedHighScore"));
      console.log("Current High Score is " + currentHighScore);
      console.log("Total Score is " + totalScore);
      if (totalScore > currentHighScore) {
        localStorage.setItem("storedHighScore", totalScore);
        console.log("HIGH SCORE!!!!!");
      }

 

    document.getElementById("playedSong").innerHTML = "Thanks for playing! Your total score was " + totalScore;
    removeElement("choiceListingDiv");
    removeElement("musicPlayerDiv");
    document.getElementById("instructions").innerHTML = "Please press q to play again";
  }
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


//------------------------------------------------------SCORING FUNCTIONS--------------------//
//https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript
var startTime, endTime, timeDiff;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

