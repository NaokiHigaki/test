/*
2のN乗の一の位を求めてください。
*/
console.log("num = ?");
const printOnePlace = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(culcOnePlace(line));
  });
};

const culcOnePlace = (num: number) => {
  let powerNum: string = String(Math.pow(2, num));
  let splitNum = powerNum.split("");
  let ans = Number(splitNum[splitNum.length - 1]);
  return ans;
};
printOnePlace();
