/*
４つの整数
A, B, C, Dが与えられる。 
「AとBが等しくかつCとDが等しい」
または
「AとCが等しくかつBとDが等しい」
かどうかを判定せよ。

入力
1行目から4行目にA, B, C, D
がそれぞれ与えられる。

出力
判定結果が真ならば1、偽ならば0を出力せよ。 1の代わりにTrueまたはtrueと出力してもよいし、 0の代わりにFalseまたはfalseと出力してもよい。
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
  let c = parseInt(lines[2]);
  let d = parseInt(lines[3]);
  let trueNum = "1";
  let falseNum = "0";
  if (a === b && c === d) {
    console.log(trueNum);
  } else if (a === c && b === d) {
    console.log(trueNum);
  } else {
    console.log(falseNum);
  }
});
