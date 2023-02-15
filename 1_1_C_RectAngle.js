/*
たて a cm よこ b cm の長方形の面積と周の長さを求めるプログラムを作成して下さい。

Input
a と b が１つの空白で区切られて与えられます。

Output
面積と周の長さを１つの空白で区切って１行に出力して下さい。


*/

const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        let vertical = parseInt(num[0]);
        let horizonal = parseInt(num[1]);
        let area = vertical * horizonal;
        let circumference = vertical * 2 + horizonal * 2;
        console.log(`${area} ${circumference}`);
    })
    return;
};
main();