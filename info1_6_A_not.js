console.log("message = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  if (line === "1") {
    console.log(0);
  } else if (line === "0") {
    console.log(1);
  }
});
