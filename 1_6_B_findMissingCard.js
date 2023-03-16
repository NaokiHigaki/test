/*
太郎が花子と一緒にトランプ遊びをしようとしたところ、52枚あるはずのカードが n 枚のカードしか手元にありません。
これらの n 枚のカードを入力として、足りないカードを出力するプログラムを作成して下さい。
太郎が最初に持っていたトランプはジョーカーを除く52枚のカードです。
52枚のカードは、スペード、ハート、クラブ、ダイヤの４つの絵柄に分かれており、各絵柄には13のランクがあります。
*/

console.log("num & card = ??");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
let re = /\s+|$/;
let suit = ["S", "H", "C", "D"];
let sequence = [...Array(14).keys()];
sequence.shift();
rl.on("close", () => {
  lines.shift();
  let cards = {};
  for (var index of suit) {
    cards[index] = [];
  }
  let cardSuit, cardNum;
  for (var index of lines) {
    [cardSuit, cardNum] = index.trim().split(re);
    cards[cardSuit].push(Number(cardNum));
  }
  let result = findMissingCards(cards);
  for (let i of suit) {
    let missingCardNum = result[i].sort((a, b) => a - b).map(String);
    for (let j of missingCardNum) {
      console.log(i, j);
    }
  }
});

const findMissingCards = (cards) => {
  let result = {};
  for (var index of suit) {
    result[index] = [];
  }
  for (let i of suit) {
    for (let j of sequence) {
      if (cards[i].indexOf(j) === -1) {
        result[i].push(j);
      }
    }
  }
  return result;
};
