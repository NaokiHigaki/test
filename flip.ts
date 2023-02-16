/*
0と1の2種類の文字からなる文字列sが与えられます。 
s に含まれる0を1に1を0に置き換えた文字列を出力してください。
*/
console.log("num = ?");
const flip = () => {
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
    let inputValue = lines[0].split("").map(Number);
    let ans: string = "";
    for (let chr of inputValue) {
      if (chr === 1) {
        ans += 0;
      } else if (chr === 0) {
        ans += 1;
      }
    }
    console.log(ans);
  });
};
flip();
