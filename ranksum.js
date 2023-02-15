/*const rankSum = (num) => { 
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) { 
        sum = sum + parseInt(num[i]);
    }
    return parseInt(sum);
};

const display = (number) => { 
    console.log(rankSum(number));
    return;
};
display(123);
display(999);
display(155);*/
const num = Math.floor(Math.random() * 10000000);
const rankSum = (n) => {
    let chr = n.toString();
    let sum = 0;
    for (let i = 0; i < chr.length; i++) { 
        sum = sum + parseInt(chr[i]);
    }
    return parseInt(sum);
};

const main = () => {
    console.log(`num = ${num}`);
    console.log(`ans = ${rankSum(num)}`);
    return;
};
main();

/*const rankSum = () => { 
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => { 
        let value = line.split(' ');
        let num = value.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++) { 
            sum = sum + parseInt(num[i]);
        }
        console.log(parseInt(sum));
        return;
    })
};
rankSum();*/