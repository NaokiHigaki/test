/* 
以下のような、たてH cm よこ W cm のチェック柄の長方形を描くプログラムを作成して下さい。

#.#.#.#.#.
.#.#.#.#.#
#.#.#.#.#.
.#.#.#.#.#
#.#.#.#.#.
.#.#.#.#.#
上図は、たて 6 cm よこ 10 cm の長方形を表しています。

長方形の左上が "#" となるように描いて下さい。
*/

console.log("num = ?");
let lines = new Array();
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
    let height = inputValue[0];
    let width = inputValue[1];
    if (height === 0 && width === 0) {
      break;
    }
    let result = printChessboard(height, width);
    console.log(result);
  }
});

const printChessboard = (height, width) => {
  let resultLine = new Array();
  resultLine[0] = "";
  resultLine[1] = "";
  let y = "";
  for (let i = 0; i < width; i++) {
    resultLine[0] += i % 2 === 0 ? "#" : ".";
    resultLine[1] += i % 2 === 1 ? "#" : ".";
  }
  resultLine[0] += "\n";
  resultLine[1] += "\n";

  for (let j = 0; j < height; j++) {
    y += resultLine[j % 2];
  }
  return y;
};

/*
console.log("num = ?");
("use strict");
process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  for (var line of lines) {
    var l = line.trim().split(" ").map(Number);
    var h = l[0];
    var w = l[1];

    if (h === 0 && w === 0) {
      break;
    }
    //console.log('h: ', h, 'w: ', w )
    console.log(aux(h, w));
  }
});

function aux(h, w) {
  var l = [];
  l[0] = "";
  l[1] = "";
  var s = "";
  for (var i = 0; i < w; i++) {
    l[0] += i % 2 === 0 ? "#" : ".";
    l[1] += i % 2 === 1 ? "#" : ".";
  }
  l[0] += "\n";
  l[1] += "\n";

  //console.log('l[0]: ', l[0]);
  //console.log('l[1]: ', l[1]);

  for (var j = 0; j < h; j++) {
    s += l[j % 2];
  }
  //console.log('s: ', s)

  return s;
}
*/
