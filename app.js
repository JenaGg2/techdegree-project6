//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const liveHeart = document.querySelector('.tries img');
const button = document.getElementsByTagName('button');
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

// get Random PhraseAs Array Function

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random()  * arr.length);
    return randomPhrase.split('');
}

getRandomPhraseAsArray(phrases)















// Check if letter is in phrasse


const checkLetter = (button) => {
    const letterList = document.querySelectorAll('.letters');
    let matched = null;
    
    for (i=0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
      
    }
  
    return matched;
  };


//   Listen for onscreen keyboard to be clicked
  
  qwerty.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
      event.target.className = 'chosen';
      event.target.disabled = true;
      const match = checkLetter(event.target.textContent.toLowerCase());
      if (match === null) {
        missed++;
        
        liveHeart[missed].src="images/lostHeart.png"
      }
     
    }
  });

