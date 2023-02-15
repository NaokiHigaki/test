/* 
n個の整数 を入力し、それらの最小値、最大値、合計値を求めるプログラムを作成してください。

Input
１行目に整数の数 
nが与えられます。２行目に 
n個の整数 が空白区切りで与えられます。

Output
最小値、最大値、合計値を空白区切りで１行に出力してください。
*/
const main = () => {
  const lines = [];
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let inputValue = lines[1].trim().split(/\s+|$/).map(Number);
    let min, max, sum;
    [min, max, sum] = culc(inputValue);
    console.log(`${min} ${max} ${sum}`);
  });
};
const culc = (inputValue) => {
  return [
    Math.min(...inputValue),
    Math.max(...inputValue),
    inputValue.reduce((a, b) => a + b),
  ];
};
main();
