console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ").map(Number);
  let count = 0;
  for (let i = inputValue[0]; i <= inputValue[1]; i++) {
    if (inputValue[2] % i === 0) {
      count += 1;
    }
  }
  console.log(count);
});
