/*
与えられた数の各桁の和を計算するプログラムを作成して下さい。

Input
複数のデータセットが入力として与えられます。各データセットは１つの整数 x を含む１行で与えられます。

x は 1000 桁以下の整数です。

x が 0 のとき入力の終わりとします。このデータセットに対する出力を行ってはいけません。

Output
各データセットに対して、x の各桁の和を１行に出力して下さい。
*/

const rankSum = () => { 
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
rankSum();