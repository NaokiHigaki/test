console.log(" num = ? ");
const binaryRepresentation = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: number) => {
    let result = line.toString(2);
    console.log(result);
  });
};
binaryRepresentation();
