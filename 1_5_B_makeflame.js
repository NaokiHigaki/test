/* 
以下のような、たてH cm よこ W cm の枠を描くプログラムを作成して下さい。

##########
#........#
#........#
#........#
#........#
##########
上図は、たて 6 cm よこ 10 cm の枠を表しています。

Input
入力は複数のデータセットから構成されています。各データセットの形式は以下のとおりです：

H W

H, W がともに 0 のとき、入力の終わりとします。
*/

/*const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let result;
  let inputValue = line.split(" ");
  let h = parseInt(inputValue[0]);
  let w = parseInt(inputValue[1]);
  if (!h && !w) process.exit();
  for (let i = 0; i < h; i++) {
    result = "";
    for (let j = 0; j < w; i++) {
      if (i == 0 || i == h - 1 || j == 0 || j == w - 1) {
        result += "#";
      } else {
        result += ".";
      }
    }
    console.log(result);
  }
  console.log("");
});
process.stdin.on("end", function () {});*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", (line) => {
  let result;
  var inputValue = line.split(" ");
  var h = parseInt(inputValue[0]);
  var w = parseInt(inputValue[1]);
  if (!h && !w) process.exit();
  for (let i = 0; i < h; i++) {
    result = "";
    for (let j = 0; j < w; j++) {
      if (i == 0 || i == h - 1 || j == 0 || j == w - 1) {
        result += "#";
      } else {
        result += ".";
      }
    }
    console.log(result);
  }
  console.log("");
});
process.stdin.on("end", function () {});
