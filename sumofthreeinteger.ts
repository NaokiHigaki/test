/*
3つの整数 A1, A2, A3が与えられます。

A1+A2+A3を出力してください。
*/
console.log("num = ?");
const sumOfThreeInteger = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue: Array<string> = line.split(" ");
    let a1: number = parseInt(inputValue[0]);
    let a2: number = parseInt(inputValue[1]);
    let a3: number = parseInt(inputValue[2]);
    let ans: number = a1 + a2 + a3;
    console.log(ans);
  });
};
sumOfThreeInteger();
