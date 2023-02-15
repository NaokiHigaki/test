/*const culc = (x) => {
    const result = Math.pow(x, 3);
    return result;
};
const display = (num) => {
    console.log(`${num}の3乗は${culc(num)}です`)
    return;
};
display(2);
display(55);
display(999);
display(1234);*/

const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        let x = parseInt(num[0]);
        console.log(Math.pow(x, 3));
    })
};
main();

//console.log(`????: ${answer}`);


/*const input = () => {
    const read = require('readline');
    const rl = read.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        console.log(num);
        let x = parseInt(num[0]);
        console.log(x);
        let result = Math.pow(x, 3);
        console.log(result);
    })
    return;
};

const display = () => {
    console.log("整数を入力してください▼");
    input();
};
display();*/



/* 
const input = () => {
    const read = require('readline'); 
    const rl = read.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        let x = parseInt(num, 10);
        console.log(Math.pow(x, 3));
    })
    return;
};

const display = () => {
    input();
    return;
};
display();
*/