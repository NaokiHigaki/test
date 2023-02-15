/*
２つの整数
A, Bの和A+Bを計算せよ。

入力
1行目にA、2行目にBが与えられる。

出力
A+Bの値を出力せよ。

制約0≤A≤1000 0≤B≤1000

入出力例
入力例1
1
1
出力例1
2
入力例2
1
2
出力例2
3
*/
console.log("num = ?");
let lines = [];
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
  console.log(a + b);
});
