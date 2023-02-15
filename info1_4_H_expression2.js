/* 
５つの整数
A, B, C, D, Eが与えられる。
A × (Bの3乗) + (C×D)/E -100
の値を求めよ。

入力
1行目から5行目にそれぞれ
A, B, C, D, Eが与えられる。

出力
計算結果を出力せよ。
*/
console.log("num = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let a = parseInt(lines[0]);
  let b = parseInt(lines[1]);
  let c = parseInt(lines[2]);
  let d = parseInt(lines[3]);
  let e = parseInt(lines[4]);
  console.log(a * Math.pow(b, 3) + (c * d) / e - 100);
});
