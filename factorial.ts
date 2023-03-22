/*
N! の値を求めてください。
*/

console.log("num = ?");
const inputNumber = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(culcFactrial(line));
  });
};

const culcFactrial = (num: number): number => {
  let baseNum = 1;
  for (var i = 1; i <= num; i++) {
    baseNum *= i;
  }
  return baseNum;
};

inputNumber();
