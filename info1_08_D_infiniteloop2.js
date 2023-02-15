/* 
与えられた整数を出力する「やまびこ」を反復せよ。ただし、負の数は出力しない。

入力
複数の整数
aiがそれぞれ１行に与えられる。
aiが0のとき入力の終了とする。

出力
aiをそれぞれ１行に順番に出力する。
ただし、aiが0以下のときは何も出力しない。
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
    let result = Number(inputValue);
    if (result === 0) {
      break;
    }
    if (result > 0) {
      console.log(result);
    }
  }
});
