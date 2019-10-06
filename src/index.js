const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    // write your solution here
    let outputStr = '';

    for (let i = 0; i < expr.length; i += 10) {
        let result = '';
        // output separate words of every string
        let words = expr.substr(i, 10);

        // decode every word in string 
        if (words !== '**********') {
            for (let j = 0; j < words.length; j += 2) {
                let number = words.substr(j, 2);
                if (number === '10') {
                    result += '.';
                } else if (number === '11') {
                    result += '-';
                } else {
                    result
                }
            }
            outputStr += MORSE_TABLE[result];
        } else {
            // if word === '**********', we make space in output string
            outputStr += ' ';
        }
    }

    return outputStr;
}

module.exports = {
    decode
}