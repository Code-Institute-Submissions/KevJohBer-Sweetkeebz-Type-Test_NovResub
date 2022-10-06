textDisplayElement = document.getElementById('paragraph');
let textArea = document.querySelector('.text-area');
let inputField = document.querySelector('.text-area .input-field');
let mistakeTag = document.querySelector('.incorrect span')
let correctTag = document.querySelector('.correct span')
let timeTag = document.querySelector('.time')
let wpmTag = document.querySelector('.wpm span')
let restart = document.querySelector('button')
document.querySelector('.time').textContent = '30'

let timer,
maxTime = 30
timeLeft = maxTime


let charIndex = 0;
let mistakes = 0
let corrects = 0
let wpm = 0
let isTyping = 0
let type = false

/**
 * generates a paragraph of text 
 * */
function generateRandomWord (){
    let text = ''
    let words = ['you ', "don't ", 'feel ', 'so ', 'far ', 'away ', 'well ', 'I ', 'was ', 'cruising ', 'down ', 'the ', 'street ', 'we ', 'will ', 'be ', 'alright ', 'man ', 'used ', 'to ', 'stay ', 'awake ', 'all ', 'night ', 'and ', 'wonder ', 'if ', 'worth ', 'fight ']
    for (i = 0; i < 150; i++) {
        text += words[Math.floor(Math.random() * words.length)]
    }   
    return text
}

/**
 * Waits for a paragraph of text and makes spans out of the letters
 */
async function generateNewRandomWord() {
    textDisplayElement.innerHTML = ''
    let paragraph = generateRandomWord()
    paragraph.split('').forEach(character => {
        let textSpan = document.createElement('span')
        textSpan.innerText = character
        textDisplayElement.appendChild(textSpan) 
    })
    document.addEventListener('keydown', () => inputField.focus())
    textDisplayElement.addEventListener('click', () => inputField.focus())
}

/**
 * Checks if input is correct or incorrect
 */
function initTyping() {
    let characters = textDisplayElement.querySelectorAll('span');
    let typedChar = inputField.value.split('')[charIndex]
    if(!isTyping){
        timer = setInterval(initTimer, 1500)
        isTyping = true;
    }
    

    if (typedChar == null) {
        charIndex--;
        characters[charIndex].classList.remove('correct', 'incorrect')
    } else {
       if(characters[charIndex].innerText === typedChar) {
        corrects++
        correctTag.innerText = corrects
        characters[charIndex].classList.add('correct')     
        } 
        else {
            mistakes++
            mistakeTag.innerText = mistakes
            characters[charIndex].classList.add('incorrect')
        }
    charIndex++;
    }
    characters.forEach(span => span.classList.remove('active'))
    characters[charIndex].classList.add('active')

    wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60)
    wpmTag.innerText = wpm
}

function initTimer(){
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
        inputField.disabled = true
        generateRandomWord()
    }
}

function weeDoo(){
    generateNewRandomWord();
    inputField.value = ''
    clearInterval(timer)
    timeLeft = maxTime
    charIndex = 0
    mistakes = 0
    isTyping = 0
    timeTag.innerHTML = maxTime
    mistakeTag.innerText = 0
    wpmTag.innerText = 0
    correctTag.innerText = 0
}

generateNewRandomWord()
inputField.addEventListener('input', initTyping);
restart.addEventListener('keydown', weeDoo)