/*
２つの自然数 x, y を入力とし、それらの最大公約数を求めるプログラムを作成してください。

２つの整数 x と y について、x ÷ d と y ÷ d の余りがともに 0 となる d のうち最大のものを、x と y の最大公約数（Greatest Common Divisor）と言います。
例えば、35 と14 の最大公約数 gcd (35, 14) は 7 となります。これは、35 の約数{1, 5, 7, 35}、14 の約数 {1, 2, 7, 14} の公約数 {1, 7} の最大値となります。

入力
x と y が１つの空白区切りで１行に与えられます。

出力
最大公約数を１行に出力してください。
*/

console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ");
  let x = parseInt(inputValue[0]);
  let y = parseInt(inputValue[1]);
  console.log(culcGcd(x, y));
});

const culcGcd = (x, y) => {
  while (x % y !== 0) {
    let tmp = y;
    y = x % y;
    x = tmp;
  }
  return y;
};
