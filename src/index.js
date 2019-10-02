const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];
    let morseDecode = [];
    let messageDecoded = '';
    for(let bits = 0; bits < expr.length; bits+=10){            // separate for 10-longed codes with 1 and 0
        symbols.push(expr.substr(bits,10));
        sym = symbols.length - 1;
        let morseSym = '';
        for(let morse = 0; morse < 9; morse += 2){              // analysing every pair in 10-symbol string
            if(symbols[sym].substr(morse, 2) == '10'){  
                morseSym += '.';
            } else if (symbols[sym].substr(morse, 2) == '11'){
                morseSym += '-';
            } else if (symbols[sym].substr(morse, 2) == '**') {
                morseSym = ' ';
                break;
            }
        }
        morseDecode.push(morseSym);
        morseSym == ' ' ? messageDecoded += morseSym : messageDecoded += MORSE_TABLE[morseSym];
    }
    return messageDecoded;
}

module.exports = {
    decode
}