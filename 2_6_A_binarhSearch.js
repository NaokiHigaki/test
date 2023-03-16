/*
要素が昇順にソートされた数列 
A={a0,a1,...,an−1}に対して、
クエリとして与えられた値kが存在するか報告してください。
4
1 2 2 4
3
2
3
5

1
0
0
*/

console.log("num = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let checkArray = lines[1].trim().split(" ").map(Number);
  let queryNum = lines[2];
  for (var i = 0; i < queryNum; i++) {
    let targetNum = Number(lines[i + 3]);
    let start = 0;
    let end = checkArray.length - 1;
    let checkExistNum = 0;
    do {
      let centerIndex = Math.floor((start + end) / 2);
      if (checkArray[centerIndex] === targetNum) {
        checkExistNum = 1;
        break;
      } else if (checkArray[centerIndex] < targetNum) {
        centerIndex++;
        start = centerIndex;
      } else {
        centerIndex--;
        end = centerIndex;
      }
    } while (start <= end);
    console.log(checkExistNum);
  }
});
