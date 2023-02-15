/* 
与えられた整数Xの正負を判定せよ。

入力
整数Xが与えられる。

出力
Xが正の数の場合1、0の場合0、負の数の場合-1を出力せよ。
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line;
  if (inputValue > 0) {
    console.log(1);
  } else if (inputValue < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
});
