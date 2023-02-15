/* 
与えられた３つの整数
a, b, cの最小値と最大値を出力してください。

Input
入力は以下の形式で与えられます。
a b c

1 行に３つの整数
a, b, c
が与えられます。

Output
最小値と最大値を空白で区切って1行に出力してください。
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
  let inputValue = lines[0].split(" ").map(Number);
  let max = Math.max(...inputValue);
  let min = Math.min(...inputValue);
  console.log(`${min} ${max}`);
});
