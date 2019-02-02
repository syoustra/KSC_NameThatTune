var songTitles = [
["Africa", "Africa.mp3", "Toto"],
["I Ran", "I_Ran.mp3", "The Flock of Seagulls"],
["You Shook Me All Night Long", "You_Shook_Me_All_Night_Long.mp3", "ACDC"],
["Take Me On", "Take_Me_On.mp3 ", "A-Ha"],
["Alone", "Alone.mp3", "Heart"],
["Billie Jean", "Billie_Jean.mp3", "Michael Jackson"],
["Uptown Girl", "Uptown_Girl.mp3", "Billy Joel"],
["Livin' On A Prayer", "Livin_On_A_Prayer.mp3", "Bon Jovi"],
["Born In The USA", "Born_In_The_USA.mp3", "Bruce Springsteen"],
["I Want Candy", "I_Want_Candy.mp3", "Bow Wow Wow"],
["Call Me", "Call_Me.mp3", "Blondie"],
["Come On Eileen!", "Come_On_Eileen.mp3", "Dexy's Midnight Runners"],
["Crazy Little Thing Called Love", "Crazy_Little_Thing_Called_Love.mp3", "Queen"],
["Hungry Like The Wolf", "Hungry_Like_The_Wolf.mp3", "Duran Duran"],
["Electric Avenue", "Electric_Avenue.mp3", "Eddy Grant"],
["Fresh Prince of Bel Air", "Fresh_Prince_Of_Bel_Air.mp3", "Will Smith"],
["Funky Town", "Funky_Town.mp3", "Lipps, Inc."],
["Hey Mickey!", "Hey_Mickey.mp3", "Toni Basil"],
["I Love Rock N' Roll", "I_Love_Rock_N_Roll.mp3", "Joan Jett"],
["I Wanna Dance With Somebody", "I_Wanna_Dance_With_Somebody.mp3", "Whitney Houston"],
["Into The Groove", "Into_The_Groove.mp3", "Madonna"],
["It Takes Two", "It_Takes_Two.mp3", "Rob Base"],
["Jack & Diane", "Jack_And_Diane.mp3", "John Mellencamp"],
["Jessie's Girl", "Jessies_Girl.mp3", "Rick Springfield"],
["Don't Stop Believin'", "Dont_Stop_Believin.mp3", "Journey"],
["Celebration", "Celebration.mp3", "Kool & The Gang"],
["Like A Virgin", "Like_A_Virgin.mp3", "Madonna"],
["Safety Dance", "Safety_Dance.mp3", "Men Without Hats"],
["Straight Outta Compton", "Straight_Outta_Compton.mp3", "NWA"],
["Push It", "Push_It.mp3", "Salt-N-Pepa"],
["Relax", "Relax.mp3", "Frankie Goes To Hollywood"],
["Never Going to Give You Up", "Never_Going_To_Give_You_Up.mp3", "Rick Astley"],
["Don't You Forget About Me", "Dont_You.mp3", "Simple Minds"],
["Start Me Up", "Start_Me_Up.mp3", "The Rolling Stones"],
["Super Freak", "Super_Freak.mp3", "Rick James"],
["Eye of The Tiger", "Eye_Of_The_Tiger.mp3", "Survivor"],
["Sweet Child O' Mine", "Sweet_Child_O_Mine.mp3", "Guns N' Roses"],
["Tainted Love", "Tainted_Love.mp3", "Soft Cell"],
["Pump Up The Jam", "Pump_Up_The_Jam.mp3", "Technotronic"],
["The Love Shack", "Love_Shack.mp3", "The B-52's"],
["Should I Stay Or Should I Go", "Should_I_Stay_Or_Should_I_Go.mp3", "The Clash"],
["Time After Time", "Time_After_Time.mp3", "Cyndi Lauper"],
["Under Pressure", "Under_Pressure.mp3", "Queen"],
["Wake Me Up Before You Go-Go", "Wake_Me_Up_Before_You_Go_GoA.mp3", "Wham!"],
["Walk Like An Egyptian", "Walk_Like_An_Egyptian.mp3", "The Bangles"],
["Walking On Sunshine", "Walking_On_Sunshine.mp3", "Katrina and The Waves"],
["We Built This City", "We_Built_This_City.mp3", "Jefferson Starship"],
["We Got The Beat", "We_Got_The_Beat.mp3", "The Go-Go's"],
["We're Not Gonna Take It", "We're_Not_Gonna_Take_It.mp3", "Twisted Sister"],
["What I Like About You", "What_I_Like_About_you.mp3", "The Romantics"],
["When Doves Cry", "When_Doves_Cry.mp3", "Prince"], 
["Bust A Move", "Bust_A_Move.mp3", "Young MC"]
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
questionTotal = 10;
var totalScore = 0;
var currentHighScore;
var storedHighScore;
var wrongGuess;
var totalWrongGuesses;
totalWrongGuesses = 0;


// storedHighScore = 50;
// localStorage.setItem("storedHighScore", storedHighScore);
storedHighScore = localStorage.getItem("storedHighScore");
console.log(localStorage.getItem("storedHighScore"));
if (localStorage.getItem("storedHighScore") !== null && localStorage.getItem("storedHighScore") !== ""
    && typeof(localStorage.getItem("storedHighScore") != "undefined")) {
  console.log("The current stored high score is " + localStorage.getItem("storedHighScore"));
} else {
  localStorage.setItem("storedHighScore", 0);
  console.log("Stored High Score has been initialized at 0");
}

        document.getElementById("gameScreen").style.visibility = "hidden";

document.getElementById("currentHighScore").innerHTML = "Current High Score is .... " + storedHighScore;
console.log("Stored high score is " + storedHighScore);




//------------------------------------CLEAR SPLASH SCREEN/START GAME----------------------------------/



//-------------------------------this never actually happens?!?!?!?!?
 function startGame() {

        document.getElementById("scoreStatus").innerHTML = "Current High Score: " + storedHighScore + "   Your Score: " + totalScore;

    window.onkeydown = function(e) {
      switch (e.keyCode) {
        case 32:
        document.getElementById("splashScreen").style.display = "none";
        console.log("Game begins NOW!!!!!");
                document.getElementById("scoreStatus").innerHTML = "Current High Score: " + storedHighScore + "   Your Score: " + totalScore;
                console.log(storedHighScore, totalScore);
        nextQuestion();
        break;
      }
    };
  }

  // startGame();

// addEventListener("keydown", startQuestion(event));
//   function startQuestion() {
//     if (event.key == " ")
//         document.getElementById("splashScreen").style.display = "none";

//       removeEventListener("keydown", startQuestion(event));
//       nextQuestion();
//     }

  //   addEventListener("keydown", function(event) {
  //   if (event.key == " ") {
  //       document.getElementById("splashScreen").style.display = "none";
  //       nextQuestion();

  //     playSong();
  //   }
  // });
//------------------------------------CLEAR SPLASH SCREEN/START GAME----------------------------------/



function nextQuestion() {
  //Select the right and wrong songs for this question

  wrongGuess = 0;
  songTimer = 0;
  timeDiff = 0;
  roundScore = 0;  


      // document.getElementById("questionText").innerHTML = "Mystery Song #" + (questionsAsked + 1) + " of 10:"


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

  document.getElementById("choice1").innerHTML = "RED ~ " + wrongSongs[0][0];
  document.getElementById("choice2").innerHTML = "BLUE ~ " + wrongSongs[1][0];
  document.getElementById("choice3").innerHTML = "GREEN ~ " + wrongSongs[2][0];
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
        document.getElementById("questionText").innerHTML = "Mystery Song #" + (questionsAsked + 1) + " of 10:"


 // document.getElementById("playerState").innerHTML = "Music is playing; click to pause";
  document.getElementById("timePlayed").style.visibility = "hidden";
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
}

function pauseSong() {
  musicPlayer.pause();
  songTimer = musicPlayer.currentTime;
      // document.getElementById("playedSong").style.visibility = "hidden";
  
  document.getElementById("timePlayed").innerHTML = "You listened to this song for " + songTimer + " seconds.";
    document.getElementById("timePlayed").style.visibility = "visible";
    document.getElementById("choiceListingDiv").style.visibility = "visible";

  // document.getElementById("playerState").innerHTML = "Music is paused; click to continue playing";


  end();
  
  
  roundScore = 100 - (Math.round(songTimer)) - (Math.round(timeDiff)) - (wrongGuess * 5);
    // if (roundScore < 0) {
    //   roundScore = 0;
    // } 
  // totalScore = totalScore + roundScore;
  // document.getElementById("score").innerHTML = "Your elapsed time is " + timeDiff + " and your score for this question so far is " + roundScore;
  // + " and your total score is " + totalScore;

  document.getElementById("timePlayed").innerHTML = "Time Listened: " + songTimer + " || Time Spent:" + timeDiff + " || Wrong Guesses: " + wrongGuess + " || Question Score: " + roundScore;

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
    if (event.key == " "){
                document.getElementById("splashScreen").style.display = "none";
        document.getElementById("gameScreen").style.visibility = "visible";
  
          playSong();
        }
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
      winLoseText = "Survey says .... XXX! Try again."
      wrongGuess ++;
      console.log(winLoseText);
                  // document.getElementById("playedSong").style.display = "inline";



            document.getElementById("questionText").innerHTML = winLoseText;
            listenForKeypress();

              songChoices = shuffle(wrongSongs);
  console.log("Options Seen By Player: " + songChoices.toString());
 document.getElementById("choice1").innerHTML = "RED ~ " + wrongSongs[0][0];
  document.getElementById("choice2").innerHTML = "BLUE ~ " + wrongSongs[1][0];
  document.getElementById("choice3").innerHTML = "GREEN ~ " + wrongSongs[2][0];
    //---------------------------------CHANGE FOR NUMBER OF CHOICES----------------------------//
  // document.getElementById("choice4").innerHTML = "4. " + wrongSongs[3][0];




      // document.getElementById("choice1").innerHTML = "1. By the Power";
      // document.getElementById("choice2").innerHTML = "2. of Greyskull...";
      // document.getElementById("choice3").innerHTML = "3. You are the";
      // document.getElementById("choice4").innerHTML = "4. Winner!!!!!";

    } else {
      // alert("*sad trombone*");
      document.getElementById("choiceListingDiv").style.visibility = "hidden";
      winLoseText = "That's right! That was " + selectedSong[0] + " by " + selectedSong[2] + "!";
                  // document.getElementById("questionText").innerHTML = winLoseText;

      console.log(winLoseText);

      // document.getElementById("choice1").innerHTML = "1. I";
      // document.getElementById("choice2").innerHTML = "2. Pity";
      // document.getElementById("choice3").innerHTML = "3. The";
      // document.getElementById("choice4").innerHTML = "4. Fool....";


      questionsAsked++;
    // alert(questionsAsked);
        if (roundScore < 0) {
      roundScore = 0;
    } 

      totalScore = totalScore + roundScore;
        totalWrongGuesses = totalWrongGuesses + wrongGuess;

      // document.getElementById("playedSong").innerHTML = winLoseText 
      //   + " Your score for this question is " + roundScore
      //   + " and your total score so far is " + totalScore + "."
      //   + " You had " + wrongGuess + " wrong guesses."
      //   + " Press space for the next question.";

                        // document.getElementById("questionText").innerHTML = winLoseText;

      songToPlay.src="";
      musicPlayer.load();



      moreQuestions();
    }
  }
}



//----------------------------START OF ACTUAL GAMEPLAY, PERHAPS???--------------------------------------//

// document.documentElement.requestFullscreen();

startGame();

nextQuestion();
function moreQuestions() {
  if (questionsAsked < questionTotal) {
            // document.getElementById("scoreStatus").innerHTML = "Current High Score: " + storedHighScore + "   Your Score: " + totalScore;
                  document.getElementById("questionText").innerHTML = winLoseText;


    nextQuestion();
  } else {

      currentHighScore = parseInt(localStorage.getItem("storedHighScore"));
      console.log("Current High Score is " + currentHighScore);
      console.log("Total Score is " + totalScore);



    document.getElementById("playedSong").innerHTML = " <br> Thanks for playing! Your total score was " + totalScore
      + " with a total of " + totalWrongGuesses + " wrong guesses. <br>"
      + " The previous High Score was " + currentHighScore + ". <br> <br> <br>";

      if (totalScore > currentHighScore) {
        localStorage.setItem("storedHighScore", totalScore);
        console.log("HIGH SCORE!!!!!");
        document.getElementById("playedSong").innerHTML += " You beat the High Score!!!!! <br>"
         + " Congrats, and enjoy the rest of your evening at Kentucky Science Center's Science with a Twist!"
      } else {

        document.getElementById("playedSong").innerHTML += " You did not beat the High Score. *insert sad trombones here* <br>"
         + " Thanks for trying, though, and enjoy the rest of your evening at <br> Kentucky Science Center's Science with a Twist!"

      }
 

    removeElement("choiceListingDiv");
    removeElement("musicPlayerDiv");
        removeElement("scoreStatus");
        removeElement("questionText");

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

