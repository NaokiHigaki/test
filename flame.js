/*const makeFlame = (letter, none, length, depth) => { 
    console.log(letter.repeat(length));
    for (let i = 0; i < depth - 2; i++) { 
        console.log(letter.repeat(1) + none.repeat(length - 2) + letter.repeat(1) )
    }
    console.log(letter.repeat(length));
    return;
};
makeFlame("#", ".", 5, 4);
makeFlame("$", ".", 6, 8);*/

const vertical = Math.floor(Math.random() * 101);
const horizonal = Math.floor(Math.random() * 101);
const letter = "#";
const noneLetter = ".";
const makeFlame = (v, h, l, n) => {
    console.log(l.repeat(h));
    for (let i = 0; i < v - 2; i++) { 
        console.log(l.repeat(1) + n.repeat(h - 2) + l.repeat(1));
    }
    console.log(l.repeat(h));
    return;
};
const main = () => {
    console.log(`vertical = ${vertical}, horizonal = ${horizonal}`);
    console.log(makeFlame(vertical, horizonal, letter, noneLetter));
    return;
};
main();