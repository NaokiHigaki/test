/*
与えられた２つの整数の最小値を求めよ。

入力
１行目に整数A、２行目に整数Bが与えられる。

出力
最小値を出力せよ。
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
  let result = Math.min(...lines);
  console.log(result);
});
