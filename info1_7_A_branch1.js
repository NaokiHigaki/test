/* 
与えられた整数
Xが自然数かどうかを判定せよ。ただし、
0は自然数に含めない。

入力
整数Xが与えられる。

出力
Xが自然数の場合yesと出力せよ。 
Xが自然数以外の場合は、なにも出力しない。
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = Number(line);
  if (inputValue > 0 && Number.isInteger(inputValue)) {
    console.log("yes");
  }
});
