/*
正の整数 N が与えられるので、
4^0 + 4^1 +⋯+ 4^N を 1000000007 で割った余りを出力してください。
*/
console.log("num = ?");
const printNthPower = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(culcNthPower(line));
  });
};

const culcNthPower = (num: number) => {
  let powerNum: number = 0;
  for (var i = 0; i <= num; i++) {
    powerNum += Math.pow(4, i);
  }
  console.log(`powerNum: ${powerNum}`);
  let ans = powerNum % 1000000007;
  return ans;
};

printNthPower();
