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
    let outputStr = ''

    for (let i = 0; i < expr.length; i = i + 10) {
        let result = '';

        let letters = expr.substr(i,10)

        if (letters !== '**********') {
            for (let j = 0; j < letters.length; j = j + 2) {
                let letter = letters.substr(j,2)
                // if (letter === '10') {
                //     result += '.'
                // }
                // else if (letter === '11') {
                //     result += '-'
                // }
                // else {
                //     result
                // }
                switch (letter) {
                    case '10':
                        result += '.';
                        break
                    case '11':
                        result += '-';
                        break
                    default:
                        result;
                        break
                }


            }
            outputStr += MORSE_TABLE[result];

        } else {
            outputStr += ' '
        }
    }


    return outputStr;

}

module.exports = {
    decode
}

