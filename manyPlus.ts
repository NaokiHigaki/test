/*
N個の整数の 
2つ組 (A1, B1), (A2, B2), …, (AN, BN)が与えられます。
各i=1,2,…,N について、Ai+Biを出力してください。
*/
console.log("num = ?");
const manyPlus = () => {
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
    lines.shift();
    let item: Array<number> = new Array();
    for (let i = 0; i < lines.length; i++) {
      item = lines[i].split(" ").map(Number);
      let ans: number = item[0] + item[1];
      console.log(ans);
    }
  });
};
manyPlus();
