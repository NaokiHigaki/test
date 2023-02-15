/*
整数
Aの１０乗を計算せよ。

入力
1行にAが与えられる。

出力
Aの１０乗を出力せよ。
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
  let result = Math.pow(a, 10);
  console.log(result);
});
