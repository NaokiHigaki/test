/*
長さ 
N の配列 
[A1, A2, ⋯, AN]が与えられます。
書籍に記されている「マージソートを行う未完成のプログラム」を元に、配列を昇順に並び替えるプログラムを作成してください。
*/
console.log("array = ?");
const printSortedArray = () => {
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
    console.log(sortArray(lines));
  });
};

const sortArray = (lines: Array<string>) => {
  let targetArray: Array<string> = lines[1].trim().split(" ");
  let numTargetArray: Array<number> = targetArray.map((element) =>
    Number(element)
  );
  numTargetArray.sort((a, b) => a - b);
  let ans = numTargetArray.join(" ");
  return ans;
};
printSortedArray();
