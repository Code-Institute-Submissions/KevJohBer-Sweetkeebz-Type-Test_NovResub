let rows = document.querySelectorAll('.text-area p');
let inputField = document.querySelector('.text-area .input-field');
let mistakeTag = document.querySelector('.incorrect span');
let correctTag = document.querySelector('.correct span');
let timeTag = document.querySelector('.time');
let wpmTag = document.querySelector('.wpm span');
let restart = document.querySelector('button');
let textArea = document.querySelector('.text-area');
let caps = document.querySelector('.caps-lock');
let colorTheme = document.querySelector('.change-color-theme i');

document.querySelector('.time').textContent = '30';


let timeLeft = 30;
let mistakes = 0;
let corrects = 0;
let wpm = 0;
let isTyping = false;
let charIndex = 0;
let colorThemes = ['color-one', 'color-two', 'color-three'];
let currentTheme = 0;

/**
 * generates a list of random words.
 * */
function generateRandomWord (){
    let text = '';
    let words = ['you ', "don't ", 'feel ', 'so ', 'far ', 'away ', 'well ', 'I ', 'was ', 'cruising ', 'down ', 'the ', 'street ', 'we ', 'will ', 'be ', 'alright ', 'man ', 'used ', 'to ', 'stay ', 'awake ', 'all ', 'night ', 'and ', 'wonder ', 'if ', 'worth ', 'fight ', 'Sweden ', 'India ', 'November '];
    for (let i = 0; i < 14; i++) {
        text += words[Math.floor(Math.random() * words.length)];
    }   
    return text;
}

/**
 * Takes in randomized text and turns the letters into spans.
 */
function generateRow(row) {
    row.innerHTML = '';
    let paragraph = generateRandomWord();
    paragraph.split('').forEach(function(character) {
        let textSpan = document.createElement('span');
        textSpan.innerText = character;
        row.appendChild(textSpan);
    });

    document.addEventListener('keydown', function() {
        inputField.focus();
    });
    row.addEventListener('click', function() {
        inputField.focus();
    });   
}


/**
 * Counts correct/incorrect input and keeps track of words per minute.
 */
function initTyping() {
    let rowLength = rows[0].querySelectorAll('span').length;
    let characters = textArea.querySelectorAll('span');
    let typedChar = inputField.value[charIndex];

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
    characters.forEach((span) => {
        span.classList.remove('active');
    });
    characters[charIndex].classList.add('active');

    wpm = Math.round(((corrects) / 5) * 1.3);
    wpmTag.innerText = wpm;
    
    if (charIndex == rowLength){
        appendRow();
    }      
}

/**
 * Removes top row and appends a bottom row.
 */
function appendRow(){
    textArea.removeChild(rows[0]);
    let newRow = document.createElement('p');
    textArea.appendChild(newRow);
    generateRow(newRow);
    charIndex = 0;
    inputField.value = '';
    rows = document.querySelectorAll('.text-area p');
    rows[0].querySelectorAll('span')[charIndex].classList.add('active');
    mistakes -= 1;
    mistakeTag.innerHTML = mistakes
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
        inputField.disabled = true;
        textArea.setAttribute('style', '-webkit-filter: blur(3px)');
    }
}

/**
 * generates a new paragraph on the page and resets all varables as well as enables
 * input field again
 */
function weeDoo(){
    textArea.setAttribute('style', '-webkit-filter: blur(0px)');
    rows[0].value = '';
    rows[1].value = '';   
    rows[2].value = '';       
    generateRow(rows[0]);
    generateRow(rows[1]);
    generateRow(rows[2]);
    inputField.value = '';
    timeLeft = 30;
    charIndex = 0;
    mistakes = 0;
    corrects = 0;
    wpm = 0;
    isTyping = false;
    clearInterval(timer);
    timeTag.innerHTML = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    correctTag.innerText = 0;
    inputField.disabled = false;
    rows[0].querySelectorAll('span')[0].classList.add('active');
}

generateRow(rows[0]);
generateRow(rows[1]);
generateRow(rows[2]);

inputField.addEventListener('input', () => {
    initTyping();
});

/*caps lock warning*/
document.addEventListener('keydown', (e)=> {
    if (e.getModifierState('CapsLock')) {
        caps.style.display = 'flex';
    } else {
        caps.style.display ='none';
    }
});

/* tab + enter shortcut for restart*/
restart.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
    weeDoo();
    } else {
    inputField.focus();
    }
});
/*makes restart button clickable*/
restart.addEventListener('click', () => {
    weeDoo();
    inputField.focus();
});

colorTheme.addEventListener('click', ()=> {
    currentTheme++;
    if (currentTheme == 3) {currentTheme = 0;} 
    document.querySelector('.color-themes').href = 'assets/css/color-themes/' + colorThemes[currentTheme] + '.css';
});

rows[0].querySelectorAll('span')[0].classList.add('active');