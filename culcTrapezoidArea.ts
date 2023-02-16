console.log("num = ?");
/*let lines: Array<string> = new Array(); //or let lines: string[] = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line: string) => {
  lines.push(line);
});
rl.on("close", () => {
  let upperBase: number = parseInt(lines[0]);
  let lowerBase: number = parseInt(lines[1]);
  let height: number = parseInt(lines[2]);
  let result: number = ((upperBase + lowerBase) * height) / 2;
  console.log(result);
});*/

const main = () => {
  let lines: Array<string> = new Array();
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let upperBase: number = parseInt(lines[0]);
    let lowerBase: number = parseInt(lines[1]);
    let height: number = parseInt(lines[2]);
    console.log(culcArea(upperBase, lowerBase, height));
  });
};

const culcArea = (a: number, b: number, h: number): number => {
  let ans: number = ((a + b) * h) / 2;
  return ans;
};
main();
