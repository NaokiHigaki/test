/*
たてH cm よこ W cm の長方形を描くプログラムを作成して下さい。
1 cm × 1cm の長方形を '#'で表します。

Input
入力は複数のデータセットから構成されています。各データセットの形式は以下のとおりです：

H W

H, W がともに 0 のとき、入力の終わりとします。

Output
各データセットについて、H × W 個の '#' で描かれた長方形を出力して下さい。

各データセットの後に、１つの空行を入れて下さい。
*/

let lines = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  for (let line of lines) {
    let inputValue = line.trim().split(" ").map(Number);
    let h = inputValue[0];
    let w = inputValue[1];
    if (h === 0 && w === 0) {
      break;
    }
    console.log(makeSquare(h, w));
  }
});
const makeSquare = (height, width) => {
  let x = "",
    y = "";
  for (let i = 0; i < width; i++) {
    x += "#";
  }
  x += "\n";
  for (let j = 0; j < height; j++) {
    y += x;
  }
  return y;
};
