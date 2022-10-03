document.addEventListener('DOMContentLoaded', generateRandomWord)

/**generates a paragraph of text */
function generateRandomWord (){
    let text = ''
    let words = ['you ', "don't ", 'feel ', 'so ', 'far ', 'away ', 'well ', 'I ', 'was ', 'cruising ', 'down ', 'the ', 'street ', 'we ', 'will ', 'be ', 'alright ', 'man ', 'used ', 'to ', 'stay ', 'awake ', 'all ', 'night ', 'and ', 'wonder ', 'if ', 'worth ', 'fight ']
    for (i = 0; i < 50; i++) {
        text += words[Math.floor(Math.random() * 10)]
    }
    return text
}

let textBox = document.getElementById('paragraph')
textBox.textContent = generateRandomWord()