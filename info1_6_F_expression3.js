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
  let a = parseInt(inputValue[0]);
  let b = parseInt(inputValue[1]);
  let c = parseInt(inputValue[2]);
  if (!(a && b) || c === 1) {
    console.log(1);
  } else {
    console.log(0);
  }
});
