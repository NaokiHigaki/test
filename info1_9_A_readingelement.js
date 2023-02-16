/*
与えられた数列Aのk番目の要素を出力せよ。

入力
１行目に数列の要素の数Nが与えられる。 
続くN行に数列Aのi番目の要素ai(i = 0, 1, ..., N−1)がそれぞれ１行に与えられる。
続く１行に番号kが与えられる。

出力
数列Aのk番目の要素を出力せよ。
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
  let inputValue = lines.map(Number);
  let ansIndex = inputValue.slice(-1)[0];
  console.log(inputValue[ansIndex + 1]);
});
