/*
A と Bの最大公約数を求めてください。
*/

console.log("nums = ?");
const inputSomeValues = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue: Array<string> = line.trim().split(" ");
    let a = Number(inputValue[0]);
    let b = Number(inputValue[1]);
    console.log(culcGcd(a, b));
  });
};

const culcGcd = (a: number, b: number): number => {
  return a % b ? culcGcd(b, a % b) : b;
};
inputSomeValues();
