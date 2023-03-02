console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ").map(Number);
  let result = inputValue[0] + inputValue[1];
  console.log(result);
});
