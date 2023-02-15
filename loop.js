/*const forSyntax = (x) => { 
    for (let i = 0; i < 1000; i++) { 
        console.log(`${i}:${x}`);
    }
    return;
};
forSyntax("Hello World");

const whileSyntax = (x) => { 
    let i = 0;
    while (i < 1000) { 
        console.log(`${i}:${x}`);
        i++;
    }
    return;
};
whileSyntax("Goodbye World");*/

/*const loopGreet = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        let count = parseInt(num[0]);
        for (let i = 0; i < count; i++) {
            console.log("Hello World");
        }
    });
    return;
};
loopGreet();*/

let count = Math.floor(Math.random() * 100);
const loopWord = (n) => {
    console.log(`count = ${n}`);
    for (i = 0; i < n; i++) { 
        console.log(`${i}: hogehoge`);
    }
    return;
};
loopWord(count);