/* 
入力
入力は以下の形式で標準入力から与えられる．
X

出力
X を 21 で割った余りを出力せよ．

入力例 1
50
出力例 1
8
50 を 21 で割った余りは 8 であるので，8 を出力する．

入力例 2
42
出力例 2
0
X が 21 で割り切れる場合もある．このとき余りは 0 であるので，0 を出力する．

入力例 3
5
出力例 3
5
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ");
  let num = Number(inputValue);
  console.log(num % 21);
});
