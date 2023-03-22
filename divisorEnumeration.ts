/*
整数Nが与えられます。 
Nの約数を列挙してください。
*/
console.log("num = ?");
const printDivisor = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    culcDivisor(line);
  });
};
const culcDivisor = (num: number) => {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
  return;
};
printDivisor();
