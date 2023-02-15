/* 
２点 P1(x1, y1), P2(x2, y2) の距離を求めるプログラムを作成せよ。

Input
x1, y1, x2, y2 （実数）が空白区切りで与えられます。

Output
P1とP2の距離を実数で１行に出力して下さい。0.0001以下の誤差があってもよいものとします。
*/

/*var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

var re = /\s+|$/;
reader.on('close', () => {
    var f = lines[0].trim().split(' ').map(Number);
    console.log(aux(f[0],f[1],f[2],f[3]));
});

function aux(x0,y0,x1,y1){
    return Math.sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0));
}*/

const main = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    let inputValue = line.split(" ");
    let x1 = inputValue[0];
    let y1 = inputValue[1];
    let x2 = inputValue[2];
    let y2 = inputValue[3];
    console.log(culc(x1, x2, y1, y2));
  });
};
main();

const culc = (x1, x2, y1, y2) => {
  let ans = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  return ans;
};
