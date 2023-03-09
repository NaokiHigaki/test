/*
１つのアルファベットが描かれた n 枚のカードの山をシャッフルします。
1回のシャッフルでは、下から h 枚のカードをまとめて取り出し、それを残ったカードの山の上に積み上げます。
カードの山は以下のように１つの文字列で与えられます。
abcdeefab
最初の文字が一番下にあるカード、最後の文字が一番上にあるカードを示しています。
例えば、これを h が 4 でシャッフルすると、最初の4文字 abcd が、残りの文字 eefab の末尾へ連結されるので以下のようになります：
eefababcd
このシャッフルを何回か繰り返します。
カードの山の最初の並び（文字列）と h の列を読み込み、最後の並び（文字列）を出力するプログラムを作成して下さい。
*/

console.log("input = ?");
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
  while (true) {
    let inputValue = lines.shift().trim();
    if (inputValue === "-") {
      break;
    }
    const cardLetter = inputValue.split("");
    //console.log(`cardLetter: ${cardLetter}`);
    const shuffleNumberOfTimes = Number(lines.shift());
    //console.log(`cardNum: ${shuffleNumberOfTimes}`);
    let cardQty = new Array();
    for (let i = 0; i < shuffleNumberOfTimes; i++) {
      cardQty.push(Number(lines.shift()));
      //console.log(`cardQty: ${cardQty}`);
    }
    console.log(cardShuffle(cardLetter, cardQty).join(""));
  }
});

const cardShuffle = (cardLetter, cardQty) => {
  const len = cardLetter.length;
  while (cardQty.length > 0) {
    let qty = cardQty.shift();
    var cardLetter = cardLetter
      .slice(qty, len)
      .concat(cardLetter.slice(0, qty));
  }
  return cardLetter;
};
