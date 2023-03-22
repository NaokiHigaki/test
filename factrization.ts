/* 
自然数Nを素因数分解するプログラムを作成してください。
なお、任意の自然数の素因数分解は一意となることが知られています。
*/
console.log("num = ?");
const printFactrization = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(culcFactrization(line));
  });
};

const culcFactrization = (num: number) => {
  let ansArray: Array<number> = new Array();
  for (var i = 2; i < i + 1; i++) {
    if (num % i === 0) {
      for (var j = 1; j < j + 1; j++) {
        if (num % i === 0) {
          ansArray.push(i);
          num = num / i;
        } else {
          break;
        }
      }
    }
    if (num === 1) {
      break;
    }
  }
  let ans = ansArray.join(" ");
  return ans;
};

printFactrization();
