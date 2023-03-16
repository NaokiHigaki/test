/*
表計算を行う簡単なプログラムを作成します。

表の行数rと列数c、r × c の要素を持つ表を読み込んで、各行と列の合計を挿入した新しい表を出力するプログラムを作成して下さい。

Input
最初の行にrとcが空白区切りで与えられます。続くr行にそれぞれc個の整数が空白区切りで与えられます。

Output
(r+1) × (c+1) の新しい表を出力して下さい。
各行の隣り合う整数は１つの空白で区切って下さい。
各行の最後の列としてその行の合計値を、各列の最後の行としてその列の合計値を、最後の行・列に表全体の合計値を挿入して下さい。

ex.
4 5
1 1 3 4 5
2 2 2 4 5
3 3 0 1 1
2 3 4 4 6

->
1 1 3 4 5 14
2 2 2 4 5 15
3 3 0 1 1 8
2 3 4 4 6 19
8 9 9 13 17 56
*/
console.log("nums = ?");
const lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let inputValue = "";
  for (inputValue of lines) {
    var i = 0;
    inputValue = lines[i].trim().split("\n");
    i++;
  }
  let height, width;
  [height, width] = inputValue[0].split(" ").map((x) => Number(x));
  let spreadSheet = Array.from(new Array(height + 1), () =>
    new Array(width + 1).fill(0)
  );
  for (let vertical = 0; vertical < height; vertical++) {
    let tmp = inputValue[vertical + 1].split(" ").map((x) => Number(x));
    let sum = 0;
    for (let horizonal = 0; horizonal <= width; horizonal++) {
      if (horizonal != width) {
        spreadSheet[vertical][horizonal] = tmp[horizonal];
        sum += tmp[x];
      } else {
        spreadSheet[vertical][horizonal] = sum;
      }
    }
  }
  for (let horizonal = 0; horizonal <= 0; horizonal++) {
    for (let vertical = 0; vertical < height; vertical++) {
      let result = "";
      for (let vertical = 0; vertical <= width; vertical++) {
        result += String(spreadSheet[y][x]);
        if (horizonal != width) {
          result += " ";
        }
      }
    }
    console.log(result);
  }
});
