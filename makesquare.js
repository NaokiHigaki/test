/*const makeSquare = (letter, x, y) => {
    for (let i = 0; i < y; i++) {
        console.log(letter.repeat(x));
    }
    return;
};

makeSquare("&", 4, 5);
makeSquare("#", 5, 5);
makeSquare("%", 100, 3);*/

/*const inputMakeSquare = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let inputValue = line.split(' ');
        let chr = inputValue[0];
        let vertical = parseInt(inputValue[1]);
        let horizonal = parseInt(inputValue[2]);
        for (let i = 0; i < horizonal; i++) { 
            console.log(chr.repeat(vertical));
        }
    });
    return;
};
inputMakeSquare();*/

const vertical = Math.floor(Math.random() * 101);
const horizonal = Math.floor(Math.random() * 101);
const letter = "#";
const makeSquare = (v, h, l) => {
    for (let i = 0; i < h; i++) { 
        console.log(l.repeat(v));
    }
    return;
};
const main = () => {
    console.log(`vertical = ${vertical}, horizonal = ${horizonal}`);
    makeSquare(vertical, horizonal, letter);
    return;
};
main();