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
  let inputValue = lines;
  let a = inputValue[0];
  let b = inputValue[1];
  let c = inputValue[2];
  let d = inputValue[3];
  if (a === b && c === d) {
    console.log(1);
  } else {
    console.log(0);
  }
});
