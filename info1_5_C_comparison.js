/* 
２つの整数
A, Bが与えられる。
AがBより小さいかどうかを判定せよ。

入力
1行目にA、2行目にBが与えられる。

出力
AがBより小さいならば1を、そうでなければ0を出力せよ。
1の代わりにTrueまたはtrueと出力してもよいし、 0の代わりにFalseまたはfalseと出力してもよい。
*/
console.log("num = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let a = parseInt(lines[0]);
  let b = parseInt(lines[1]);
  let trueNum = "1";
  let falseNum = "0";
  if (a < b) {
    console.log(trueNum);
  } else {
    console.log(falseNum);
  }
});
