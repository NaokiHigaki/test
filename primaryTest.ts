/*
N が素数であるかどうかを判定してください。
*/
console.log("num = ?");
const showResult = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(checkNumPrimary(line));
  });
};

const checkNumPrimary = (receiveValue: number) => {
  if (receiveValue < 2) {
    return "No";
  }
  for (var i = 2; i < receiveValue; i++) {
    if (receiveValue % i === 0) {
      return "No";
    }
  }
  return "Yes";
};

showResult();
