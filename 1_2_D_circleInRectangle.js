/* 
長方形の中に円が含まれるかを判定するプログラムを作成してください。次のように、長方形は左下の頂点を原点とし、右上の頂点の座標 
(W, H)が与えられます。また、円はその中心の座標 (x, y)と半径 rで与えられます。
*/

console.log("nums = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ").map(Number);
  let w = inputValue[0];
  let h = inputValue[1];
  let x = inputValue[2];
  let y = inputValue[3];
  let r = inputValue[4];
  let ans = checkCircleinRectangle(w, h, x, y, r);
  console.log(ans);
});
const checkCircleinRectangle = (w, h, x, y, r) => {
  if (x - r >= 0 && x + r <= w && y - r >= 0 && y + r <= h) {
    return "Yes";
  } else {
    return "No";
  }
};
