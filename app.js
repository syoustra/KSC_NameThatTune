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
window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "49") {
        alert("Option 1 is selected");
    } else if (e.keyCode == "50") {
        alert("Option 2 is selected");
    } else if (e.keyCode == "51") {
        alert("Option 3 is selected");
    } else if (e.keyCode == "52") {
        alert("Option 4 is selected");
    }
}
