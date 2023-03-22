/*
N 以下の素数を、小さい順に出力してください。
*/
console.log("num = ?");
const printPrimeNumbers = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(culcPrimeNumbers(line));
  });
};

const culcPrimeNumbers = (num: number) => {
  let result: Array<number>, flag: number;
  var x: number, i: number;
  result = [2, 3];
  for (x = 5; x < num; x += 2) {
    flag = 0;
    for (i = 0; result[i] * result[i] <= x; i++) {
      if (x % result[i] === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      result.push(x);
    }
  }
  let ans = result.join(" ");
  return ans;
};

printPrimeNumbers();
