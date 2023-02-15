/* 

秒単位の時間 Sが与えられるので、
h:m:sの形式へ変換して出力してください。
ここで、
hは時間、mは 60 未満の分、sは 60 未満の秒とします。

Input
Sが１行に与えられます。

Output
h、m、sを :（コロン）区切りで１行に出力してください。数値が１桁の場合、0 を付けて２桁表示をする必要はありません。

*/
const changeTime = () => { 
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let S = line.split(' ');
        let hour = Math.floor(S / 3600);
        let minute = Math.floor(S / 60) % 60;
        let second = S % 60;
        console.log(`${hour}:${minute}:${second}`);
    });
    return;
};
changeTime();
