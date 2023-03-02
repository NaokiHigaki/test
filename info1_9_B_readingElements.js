console.log("num = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  lines.shift();
  for (let i = lines[lines.length - 2]; i <= lines[lines.length - 1]; i++) {
    console.log(lines[i]);
  }
});
