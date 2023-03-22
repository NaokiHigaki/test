/*
√a + √b < √cですか？
*/

console.log("nums = ?");
const printResult = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue = line.trim().split(" ");
    let a = Number(inputValue[0]);
    let b = Number(inputValue[1]);
    let c = Number(inputValue[2]);
    console.log(compareNums(a, b, c));
  });
};
const compareNums = (a: number, b: number, c: number) => {
  if (Math.sqrt(a) + Math.sqrt(b) < Math.sqrt(c)) {
    return "Yes";
  } else {
    return "No";
  }
};
printResult();
