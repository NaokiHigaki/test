/*
太郎が花子と一緒にトランプ遊びをしようとしたところ、52枚あるはずのカードが n 枚のカードしか手元にありません。
これらの n 枚のカードを入力として、足りないカードを出力するプログラムを作成して下さい。
太郎が最初に持っていたトランプはジョーカーを除く52枚のカードです。
52枚のカードは、スペード、ハート、クラブ、ダイヤの４つの絵柄に分かれており、各絵柄には13のランクがあります。
*/
console.log("input = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  outptu: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
let re = /\s+|$/;
let cardSuit = ["S", "H", "C", "D"];
let sequence = [...Array(14).keys()];
sequence.shift();
rl.on("close", () => {
  let trumpCards = {};
  for (let cardNum of cardSuit) {
    trumpCards[cardNum] = [];
  }
  let suit,
    num = "";
  for (let chr of lines) {
    [suit, num] = chr.trim().split(re);
    trumpCards[suit].push(Number(r));
  }
  let ans = findMissingCard(trumpCards);
  console.log(ans);
});

const findMissingCard = (trumpCards) => {
  let result = {};
  for (let i of cardSuit) {
    result[i] = [];
  }
  for (let j of cardSuit) {
    for (let k of sequence) {
      if (trumpCards[j].indexOf(k) === -1) {
        result[j].push(k);
      }
    }
  }
  return result;
};
