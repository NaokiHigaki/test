console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ").map(Number);
  let result = Math.pow(inputValue[0], inputValue[1]) % 1000000007;
  console.log(inputValue[0], inputValue[1]);
  console.log(result);
});
