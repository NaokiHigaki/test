/* 
与えられた整数の累積値を計算し、目的値に達したときの値を求めよ。

入力
１行目に整数Nが与えられる。 ２行目に整数Tが与えられる。 続くN行に整数
ai(i=1, 2, ..., N)がそれぞれ１行に与えられる。

出力
aiを与えられた順に加算した累積値が最初にT以上となる累積値を出力せよ。
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
  let sum = 0;
  let quantity = inputValue[0];
  let borderNum = inputValue[1];
  for (let i = 0; i < quantity; i++) {
    sum += inputValue[i + 2];
    if (sum >= borderNum) {
      break;
    }
  }
  console.log(sum);
});
