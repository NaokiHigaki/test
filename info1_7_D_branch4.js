/*
得点
Xに対応する成績を求めよ。

入力
整数Xが与えられる。

出力
Xが 80以上100以下、 65以上80未満、 50以上65未満、 35以上50未満、 0以上35未満のとき、それぞれ A, B, C, D, F と出力せよ。
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = Number(line);
  if (inputValue >= 80 && inputValue <= 100) {
    console.log("A");
  } else if (inputValue >= 65 && inputValue < 80) {
    console.log("B");
  } else if (inputValue >= 50 && inputValue < 65) {
    console.log("C");
  } else if (inputValue >= 35 && inputValue < 50) {
    console.log("D");
  } else if (inputValue >= 0 && inputValue < 35) {
    console.log("F");
  }
});
