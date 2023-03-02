/* 
２つの整数
A, Bが与えられる。
A−( (A/B)×B )を求めよ。 ただし、
A/BはAをBで割った商とする。

入力
1行目にA、2行目にBが与えられる。

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
  let c = parseInt(a / b);
  let result = a - c * b;
  console.log(result);
});
