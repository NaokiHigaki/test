console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = Number(line);
  for (let i = 1; i <= inputValue; i++) {
    console.log(i);
  }
});
