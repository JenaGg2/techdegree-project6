//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const liveHeart = document.querySelectorAll('.tries img');
const button = document.getElementsByTagName('button');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

//Button EventListener/funcion .....
startButton.addEventListener("click", () => {
 overlay.style.display = "none";
});

// movie list in phrases

const phrases = [
    "A walk to remember",
    "10 things I hate about you",
    "A girl on the train",
    "Joker",
    "Parasite"
];

// get Random Phrase As Array Function

function getRandomPhraseAsArray(arr) {
    return phrases[Math.floor(Math.random()  * arr.length)].split('');
    

}
   randomPhrase = getRandomPhraseAsArray(phrases);   


  //  Display Phrase

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = arr[i].toLowerCase();
    phrase.appendChild(li);
    if (li.textContent === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';

    }
  }
}

addPhraseToDisplay(randomPhrase);





// Check if letter is in phrasse


function checkLetter(button) {
  const letter = document.querySelectorAll('li');
  console.log(letter);
  const match = null;
    for (let i=0; i < letter.length; i++) {
      if (button === letter[i].textContent.toLowerCase()) {
        letter[i].classList.add('show');
        matched = true;
      }
      
    };
  
    return match;
  };


//   Listen for onscreen keyboard to be clicked
  
  qwerty.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
      event.target.className = 'chosen';
      event.target.disabled = true;
      const match = checkLetter(event.target.textContent.toLowerCase());
      console.log(match);
      if (match === null) {
        missed++;
        
        liveHeart[missed-1].setAttribute("src","images/lostHeart.png");
      }
     
    }
  });



  function checkWin() {
     const letterList = document.querySelectorAll('.letter');
     const showList = document.querySelectorAll('.show');

     const letterListCount = letterList.length;
     const showListCount = showList.length;

   if (letterListCount === showListCount) {
      overlay.className = 'win';

      
   }


  }