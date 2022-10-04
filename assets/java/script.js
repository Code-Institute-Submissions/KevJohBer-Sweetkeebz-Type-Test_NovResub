document.addEventListener('DOMContentLoaded', generateRandomWord)

textDisplayElement = document.getElementById('paragraph')

textArea = document.querySelector('.text-area')

inputField = document.querySelector('.text-area .input-field')

let charIndex = 0;

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

function initTyping() {
    let characters = textDisplayElement.querySelectorAll('span');
    let typedChar = inputField.value.split('')[charIndex]
    if(characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add('correct')     
    } else {
        characters[charIndex].classList.add('incorrect')
    }
    charIndex++;

    characters.forEach(span => span.classList.remove('active'))
    characters[charIndex].classList.add('active')
}

generateNewRandomWord()
inputField.addEventListener('input', initTyping);
