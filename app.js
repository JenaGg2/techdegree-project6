//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');


let missed = 0;

//Button EventListener/funcion .....
startButton.addEventListener("click", () => {
 overlay.style.display = "none";
});

// phrases

const phrases = [
    "A walk to remember",
    "10 things I hate about you",
    "A girl on the train",
    "Joker",
    "Parasite"
]

// get Random Phrase As Array Function

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random()  * arr.length);
}
