var songTitles = [
'song1',
'song2',
'song3',
'song4',
'song5',
'song6',
'song7',
'song8',
'song9',
'song10'
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

//Select the right and wrong songs for this question
shuffle(songTitles);

var selectedSong = songTitles.pop();
var wrongSongs = songTitles.slice(0,3);
console.log("Correct Song: " + selectedSong);
console.log("Wrong Choices: " + wrongSongs.toString());
var songChoices = wrongSongs.push(selectedSong);
songChoices = shuffle(wrongSongs);
console.log("Options Seen By Player: " + songChoices.toString());

//Display the song options
document.getElementById("playedSong").innerHTML = "The song to be played is " + selectedSong;

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

var playerGuess;
// function checkGuess(playerGuess);
window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 49:
    alert('1');
    playerGuess = 1;
    checkGuess(1);
    break;
    case 50:
    alert('2');
    playerGuess = 2;
    checkGuess(2);
    break;
    case 51:
    alert('3');
    playerGuess = 3;
    checkGuess(3);
    break;
    case 52:
    alert('4');
    playerGuess = 4;
    checkGuess(4);
    break;
  }
  console.log("playerGuess = " + playerGuess);
};

function checkGuess() {
  console.log(playerGuess);
  var guessedSong = songChoices[playerGuess-1];
  console.log(guessedSong);
  if (guessedSong == selectedSong) {
    alert("YOU WIN!!!!!");
    document.getElementById("choice1").innerHTML = "1. By the Power";
    document.getElementById("choice2").innerHTML = "2. of Greyskull...";
    document.getElementById("choice3").innerHTML = "3. You are the";
    document.getElementById("choice4").innerHTML = "4. Winner!!!!!";

  } else {
    alert("*sad trombone*");
    document.getElementById("choice1").innerHTML = "1. I";
    document.getElementById("choice2").innerHTML = "2. Pity";
    document.getElementById("choice3").innerHTML = "3. The";
    document.getElementById("choice4").innerHTML = "4. Fool....";
  }
}
