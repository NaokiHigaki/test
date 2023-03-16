/*
1 から n までの数の中から、重複無しで３つの数を選びそれらの合計が x となる組み合わせの数を求めるプログラムを作成して下さい。

例えば、1 から 5 までの数から３つを選んでそれらの合計が 9 となる組み合わせは、
1 + 3 + 5 = 9
2 + 3 + 4 = 9
の２通りがあります。

Input
複数のデータセットが入力として与えられます。各データセットでは、空白で区切られた n、x が 1 行に与えられます。

n、x がともに 0 のとき入力の終わりとします。

Output
各データセットについて、組み合わせの数を１行に出力して下さい。

ex. 
5 9 1から5までの数字の中で和が9になる組み合わせの個数
0 0
-> 2
*/
console.log("num = ?");
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
  for (let line of lines) {
    let inputValue = line.trim().split(" ").map(Number);
    let borderNum = inputValue[0];
    let borderSum = inputValue[1];
    if (borderNum === 0 && borderSum === 0) {
      break;
    }
    console.log(culcCombination(borderNum, borderSum));
  }
});

const culcCombination = (borderNum, borderSum) => {
  let result = 0;
  for (let chooseNum1 = 1; chooseNum1 < borderNum; chooseNum1++) {
    for (
      let chooseNum2 = chooseNum1 + 1;
      chooseNum2 < borderNum;
      chooseNum2++
    ) {
      let checkValue = borderSum - (chooseNum1 + chooseNum2);
      if (
        checkValue > chooseNum2 &&
        checkValue <= borderNum &&
        checkValue !== chooseNum1 &&
        checkValue !== chooseNum2
      ) {
        result++;
      }
    }
  }
  return result;
};
