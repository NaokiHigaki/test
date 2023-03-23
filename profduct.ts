/*
シカのAtCoDeerくんは二つの正整数 a,b を見つけました。 
a と b の積が偶数か奇数か判定してください。
*/
console.log("nums = ?");
const printProduct = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    console.log(isEvenOdd(line));
  });
};

const isEvenOdd = (line: string) => {
  let inputValue = line.trim().split(" ");
  let numInputValue: Array<number> = inputValue.map((x) => Number(x));
  let a = numInputValue[0];
  let b = numInputValue[1];
  if ((a * b) % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

printProduct();
