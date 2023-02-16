/* 
v と w のみからなる文字列 
S が与えられます。

S の中に、下に尖っている部分が何箇所あるかを出力してください
*/
console.log("wv = ?");
const countSharp = () => {
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
    let count: number = 0;
    let inputValue: Array<string> = new Array();
    for (let i = 0; i < lines.length; i++) {
      inputValue = lines[i].split("");
    }
    for (let chr of inputValue) {
      if (chr === "v") {
        count += 1;
      } else if (chr === "w") {
        count += 2;
      }
    }
    console.log(count);
  });
};
countSharp();
