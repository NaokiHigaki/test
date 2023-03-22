/*
整数 n,r が与えられます。
nCrを出力するプログラムを作成してください。
*/
console.log("num = ?");
const main = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue = line.trim().split(" ");
    let n = Number(inputValue[0]);
    let r = Number(inputValue[1]);
    let permulation = culcPermulation(n, r);
    let factrial = getFactrial(r);
    let ans = getCombination(permulation, factrial);
    console.log(ans);
  });
};

const getFactrial = (r: number): number => {
  let baseNum = 1;
  for (var i = 1; i <= r; i++) {
    baseNum *= i;
  }
  return baseNum;
};

const culcPermulation = (n: number, r: number) => {
  let startNum = n;
  for (var i = 1; i < r; i++) {
    startNum = startNum * (n - i);
  }
  return startNum;
};

const getCombination = (permulation: number, factrial: number) => {
  let result = permulation / factrial;
  return result;
};

main();
