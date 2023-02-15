/*const check = (x, y) => { 
    if (x > y) {
        console.log("x > y");
    }
    else if (x < y) {
        console.log("x < y");
    }
    else if (x === y) { 
        console.log("x === y");
    } 
    return;
};
check(1, 2);
check(22, 22);
check(3, 2);
check(4, 6);*/

const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => { 
        let num = line.split(' ');
        let x = parseInt(num[0]);
        let y = parseInt(num[1]);
        if (x > y) {
            console.log("x > y");
        }
        else if (x < y) {
            console.log("x < y");
        }
        else if (x === y) {
            console.log("x === y");
        }
    })
    return;
};
main();