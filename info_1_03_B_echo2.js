/*
入力
1行目に整数a、2行目に整数bがそれぞれ与えられる。

出力
aの値とbの値を順番に出力せよ。

入出力例
入力例1
1
2
出力例1
1
2
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ");
  let a = parseInt(inputValue[0]);
  let b = parseInt(inputValue[1]);
  console.log(a);
  console.log(b);
});
