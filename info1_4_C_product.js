/* 
２つの整数
A, Bの積A×Bを計算せよ。

入力
1行目にA、2行目にBが与えられる。

出力
A×Bの値を出力せよ。
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
  let result = a * b;
  console.log(result);
});
