/* 
入力
標準入力から１つの整数aが１行に与えられる。

出力
aの値を出力せよ。

入出力例
入力例1
32
出力例1
32
*/
console.log("num = ?");
let lines = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  console.log(parseInt(lines[0]));
  console.log(parseInt(lines[1]));
});
