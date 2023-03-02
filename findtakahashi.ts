console.log("num = ?");
const findtakahashi = () => {
  const lines: Array<string> = new Array();
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let receiveValue: Array<string> = lines[1].split(" ");
    let nums: Array<number> = receiveValue.map(Number);
    console.log(Math.max(...nums));
  });
};
findtakahashi();
