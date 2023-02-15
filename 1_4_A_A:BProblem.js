/*２つの整数 a と b を読み込んで、以下の値を計算するプログラムを作成して下さい：
a ÷ b ： d (整数)
a ÷ b の余り ： r (整数)
a ÷ b ： f (浮動小数点数)

Input
1行に２つの整数 a, b が与えられます。

Output
d, r, f を１つの空白で区切って１行に出力して下さい。fについては、0.00001以下の誤差があってもよいものとします。

 */

const main = () => { 
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => { 
        let input = line.split(' ');
        let a = parseInt(input[0]);
        let b = parseInt(input[1]);
        d = Math.floor(a / b);
        r = a % b;
        f = (a / b).toFixed(5);
        console.log(`${d} ${r} ${f}`);
    })
};
main();