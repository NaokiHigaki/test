/* 
３つの整数a, b, cを読み込み、それらが a < b < cの条件を満たすならば"Yes"を、満たさないならば"No"を出力するプログラムを作成して下さい。

Input
３つの整数が空白で区切られて与えられます。

Output
YesまたはNoを１行に出力して下さい。
*/
const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => { 
        let inputValue = line.split(' ');
        let a = parseInt(inputValue[0]);
        let b = parseInt(inputValue[1]);
        let c = parseInt(inputValue[2]);
        if (a < b  && b< c) {
            console.log("Yes");
        }
        else { 
            console.log("No");
        }
    })
    return;
};
main();