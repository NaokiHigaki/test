console.log("num = ?");
const culcArea = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    console.log(line * line);
  });
};
culcArea();
