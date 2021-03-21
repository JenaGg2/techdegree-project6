//Variables ......
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const liveHeart = document.querySelectorAll('.tries img');
const button = document.getElementsByTagName('button');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

//Button EventListener/function .....
startButton.addEventListener("click", () => {
 overlay.style.display = "none";
});

// movie list in phrases

const phrases = [
    "A walk to remember",
    "Pretty Woman",
    "A girl on the train",
    "Joker",
    "Parasite"
];

// get Random Phrase As Array Function

function getRandomPhraseAsArray(arr) {
    return phrases[Math.floor(Math.random()  * arr.length)].split('');
    

}
   randomPhrase = getRandomPhraseAsArray(phrases);   


  //  Display Phrase function;

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
  let match = null;
    for (let i=0; i < letter.length; i++) {
      if (button === letter[i].textContent.toLowerCase()) {
        letter[i].classList.add('show');
        letter[i].style.transition = '3s ease-out';
        match = true;
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
      
      if (match === null) {
        missed++;
        const lostHeart = 5 - missed;
        const hearts = document.querySelectorAll('img');
        hearts[lostHeart].setAttribute("src","images/lostHeart.png");
      }
      checkWin();
    } 
    
  });

//  Check win function;

  function checkWin() {
     const letterList = document.querySelectorAll('.letter');
     const showList = document.querySelectorAll('.show');
     const headText = document.querySelector('.title');
     


   if (letterList.length === showList.length) {
      overlay.className = 'win';
      headText.textContent = "Congralutations, you won!!"
      overlay.style.display = 'flex';
      //  

      
   } else if (missed >= 5 ) {
     overlay.className = 'lose'
     headText.textContent = "Sorry, you loose. Please try again.";
     overlay.style.display = "flex";
    
   
    }

    resetGame();

  };

// reset game function;

  function resetGame() { 

    startButton.textContent="Play again";
    startButton.addEventListener('click', () => {
      location.reload(); 
    });
  };
  