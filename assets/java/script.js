document.addEventListener('DOMContentLoaded', generateRandomWord,)

textDisplayElement = document.getElementById('paragraph');
let textArea = document.querySelector('.text-area');
let inputField = document.querySelector('.text-area .input-field');
let mistakeTag = document.querySelector('.incorrect span')
let correctTag = document.querySelector('.correct span')

let charIndex = 0;
let mistakes = 0
let corrects = 0
let wpm = 0

/**
 * generates a paragraph of text 
 * */
function generateRandomWord (){
    let text = ''
    let words = ['you ', "don't ", 'feel ', 'so ', 'far ', 'away ', 'well ', 'I ', 'was ', 'cruising ', 'down ', 'the ', 'street ', 'we ', 'will ', 'be ', 'alright ', 'man ', 'used ', 'to ', 'stay ', 'awake ', 'all ', 'night ', 'and ', 'wonder ', 'if ', 'worth ', 'fight ']
    for (i = 0; i < 50; i++) {
        text += words[Math.floor(Math.random() * words.length)]
    }   
    return text
}

/**
 * Waits for a paragraph of text and makes spans out of the letters
 */
async function generateNewRandomWord() {
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
}

generateNewRandomWord()
inputField.addEventListener('input', initTyping);

document.getElementsByTagName('button')[0].addEventListener('submit', refreshPage)