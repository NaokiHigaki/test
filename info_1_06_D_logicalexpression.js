/**
整数Aが与えられる。Aが2, 3, 5または7であるかどうかを判定せよ。

入力
1行目にAが与えられる。

出力
判定結果が真ならば1、偽ならば0を出力せよ。 
1の代わりにTrueまたはtrueと出力してもよいし、 0の代わりにFalseまたはfalseと出力してもよい。

制約0≤A≤100
入出力例
入力例1
3
出力例1
1
入力例2
6
出力例2
0
*/

//名前はKARNで
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ");
  let judgeNum = Number(inputValue);
  let trueNum = "1";
  let falseNum = "0";
  if (judgeNum === 2 || judgeNum === 3 || judgeNum === 5 || judgeNum === 7) {
    console.log(trueNum);
  } else {
    console.log(falseNum);
  }
});
