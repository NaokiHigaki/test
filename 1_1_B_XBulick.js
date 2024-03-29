/* 
１つの整数 x を読み込んで、x の３乗を計算し結果を出力するプログラムを作成して下さい。

Input
入力として１つの整数 x が与えられます。

Output
x の３乗の計算結果を１行に出力して下さい。最後の改行を忘れないようにしましょう。
*/
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