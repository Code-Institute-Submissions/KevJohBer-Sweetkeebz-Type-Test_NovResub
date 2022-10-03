document.addEventListener('DOMContentLoaded', generateRandomWord)

let textBox = document.getElementById('paragraph').textContent
textBox.textContent = 'bruh'


/**generates a paragraph of text */
function generateRandomWord (){
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for (letter of possible) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text;
}

