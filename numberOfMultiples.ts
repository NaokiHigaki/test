console.log("num = ?");
const numberOfMultiples = () => {
  let lines: Array<string> = new Array();
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let inputValue: Array<string> = lines[0].split(" ");
    let count: number = 0;
    for (let i = 0; i < Number(inputValue[0]); i++) {
      if (i % Number(inputValue[1]) === 0 || i % Number(inputValue[2]) === 0) {
        count += 1;
      }
    }
    console.log(count);
  });
};
numberOfMultiples();
