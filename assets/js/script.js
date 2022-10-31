let textDisplayElement = document.querySelector('.paragraph1, .paragraph2, .paragraph3');
let inputField = document.querySelector('.text-area .input-field');
let mistakeTag = document.querySelector('.incorrect span');
let correctTag = document.querySelector('.correct span');
let timeTag = document.querySelector('.time');
let wpmTag = document.querySelector('.wpm span');
let restart = document.querySelector('button');
document.querySelector('.time').textContent = '30';

let timer,
maxTime = 30;
let timeLeft = maxTime;


let charIndex = 0;
let mistakes = 0;
let corrects = 0;
let wpm = 0;
let isTyping = false;

/**
 * generates a paragraph of text 
 * */
function generateRandomWord (){
    textDisplayElement.innerHTML = '';
    let text = '';
    let words = ['you ', "don't ", 'feel ', 'so ', 'far ', 'away ', 'well ', 'I ', 'was ', 'cruising ', 'down ', 'the ', 'street ', 'we ', 'will ', 'be ', 'alright ', 'man ', 'used ', 'to ', 'stay ', 'awake ', 'all ', 'night ', 'and ', 'wonder ', 'if ', 'worth ', 'fight ', 'Sweden ', 'India ', 'November '];
    for (let i = 0; i < 14; i++) {
        text += words[Math.floor(Math.random() * words.length)];
    }   
    return text;
}

/**
 * Splits the letters in the text and makes spans out of them.
 */
function generateNewRandomWord() {
    let paragraph = generateRandomWord();
    paragraph.split('').forEach(function(character) {
        let textSpan = document.createElement('span');
        textSpan.innerText = character;
        textDisplayElement.appendChild(textSpan);
    });

    document.addEventListener('keydown', function() {
        inputField.focus();
    });
    textDisplayElement.addEventListener('click', function() {
        inputField.focus();
    });
    
}

/**
 * Checks if input is correct or incorrect
 */
function initTyping() {   
    let characters = textDisplayElement.querySelectorAll('span');
    let typedChar = inputField.value.split('')[charIndex];
    if(isTyping == false){
        timer = setInterval(initTimer, 1500);
        isTyping = true;
    }  

    if (typedChar == null) {
        charIndex--;
        characters[charIndex].classList.remove('correct', 'incorrect');
    } else {
       if(characters[charIndex].innerText === typedChar) {
        corrects++;
        correctTag.innerText = corrects;
        characters[charIndex].classList.add('correct');    
        } 
        else {
            mistakes++;
            mistakeTag.innerText = mistakes;
            characters[charIndex].classList.add('incorrect');
        }
    charIndex++;
    }
    characters.forEach(function(span) {
        span.classList.remove('active');
    });
    characters[charIndex].scrollIntoView()
    characters[charIndex].classList.add('active');

    wpm = Math.round(((corrects) / 5) * 1.3);
    wpmTag.innerText = wpm; 
}

/**
 * decrements the time left variable and disables the input field
 * when the time runs out
 */
function initTimer(){
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
        inputField.disabled = true;
    }
}

/**
 * generates a new paragraph on the page and resets all varables as well as enables
 * input field again
 */
function weeDoo(){    
    generateNewRandomWord();
    inputField.value = '';
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    corrects = 0;
    wpm = 0;
    isTyping = false;
    timeTag.innerHTML = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    correctTag.innerText = 0;
    inputField.disabled = false;
    
}

generateNewRandomWord();
inputField.addEventListener('input', initTyping);
restart.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
    weeDoo();
    } else {
    inputField.focus();
    }
});
restart.addEventListener('click', function() {
    weeDoo();
    inputField.focus();
});