/*
逆順
*/
console.log("string = ?");
const sequenceOfStrings = () => {
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
    lines.shift();
    for (let i = lines.length - 1; i >= 0; i--) {
      console.log(lines[i]);
    }
  });
};
sequenceOfStrings();
