console.log("num = ?");
const printResult = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue: number = parseInt(line);
    let result: number = 2 * inputValue + 3;
    console.log(result);
  });
};
printResult();
