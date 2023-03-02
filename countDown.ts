console.log("num = ?");
const countDown = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue = Number(line);
    for (let i = inputValue; i >= 0; i--) {
      console.log(i);
    }
  });
};
countDown();
