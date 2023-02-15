/* 
与えられた３つの整数を逆順に出力せよ。

入力
1行目に整数a、2行目に整数b、3行目に整数cがそれぞれ与えられる。

出力
cの値、bの値、aの値を順番に出力せよ。

入出力例
入力例1
1
2
3
出力例1
3
2
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
  let a = parseInt(lines[0]);
  let b = parseInt(lines[1]);
  let c = parseInt(lines[2]);
  console.log(c);
  console.log(b);
  console.log(a);
});
