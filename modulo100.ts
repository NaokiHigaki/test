console.log("num = ?");
const moduloOnehundred = () => {
  let lines: Array<string> = new Array();
  const readline: any = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let inputValue: Array<number> = lines[1].split(" ").map(Number);
    let sumOfInputValue = inputValue.reduce(
      (accumlator, currentValue) => accumlator + currentValue
    );
    let result = sumOfInputValue % 100;
    console.log(result);
  });
};
moduloOnehundred();
