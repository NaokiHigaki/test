/* 
N×N個の#で、正方形を描け。

入力
整数Nが与えられる。

出力
N行にそれぞれN個の#を出力する。
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
  const letter = "#";
  let inputValue = lines[0].split(" ");
  for (let i = 0; i < inputValue; i++) {
    console.log(letter.repeat(inputValue));
  }
});
