/* 
与えられた整数を出力する「やまびこ」を反復せよ。

入力
複数の整数
aiがそれぞれ１行に与えられる。
aiが0のとき入力の終了とする。

出力
aiをそれぞれ１行に順番に出力する。ただし、
aiが0のときは何も出力しない。
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
  for (let line of lines) {
    let inputValue = line.trim().split(" ");
    if (Number(inputValue) === 0) {
      break;
    }
    console.log(parseInt(inputValue));
  }
});
