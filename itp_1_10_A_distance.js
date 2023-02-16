/* 
２点 P1(x1, y1), P2(x2, y2) の距離を求めるプログラムを作成せよ。

Input
x1, y1, x2, y2 （実数）が空白区切りで与えられます。

Output
P1とP2の距離を実数で１行に出力して下さい。0.0001以下の誤差があってもよいものとします。
*/

console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ").map(Number);
  let x1 = inputValue[0];
  let y1 = inputValue[1];
  let x2 = inputValue[2];
  let y2 = inputValue[3];
  let ans = culcDistance(x1, y1, x2, y2);
  console.log(ans);
});

const culcDistance = (x1, y1, x2, y2) => {
  let result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  return result;
};
