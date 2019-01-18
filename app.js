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

shuffle(songTitles);

var selectedSong = songTitles.pop();
document.getElementById("playedSong").innerHTML = "The song to be played is " + selectedSong.toString();

var wrongSongs = songTitles.slice(0,3);
document.getElementById("choice1").innerHTML = "The wrong answers are " + wrongSongs.toString();

var songChoices = wrongSongs.push(selectedSong);
songChoices = shuffle(wrongSongs);
document.getElementById("choice2").innerHTML = "The possible choices are " + songChoices.toString();
