/*
３つの整数
A, B, C が与えられる。
A−B×C の値を求めよ。

入力
1行目にA、2行目にB、3行目にCが与えられる。

出力
計算結果を出力せよ。
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
  let result = a - b * c;
  console.log(result);
});
