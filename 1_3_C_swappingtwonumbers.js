/*
２つの整数 x, y を読み込み、それらを値が小さい順に出力するプログラムを作成して下さい。

ただし、この問題は以下に示すようにいくつかのデータセットが与えられることに注意して下さい。

Input
入力は複数のデータセットから構成されています。各データセットは空白で区切られた２つの整数 x, y を含む１行から構成されています。

x と y がともに 0 のとき入力の終わりを示し、このデータセットに対する出力を行ってはいけません。

Output
各データセットごとに、x と y を小さい順に並べたものを１行に出力して下さい。x と y の間には１つの空白を入れて下さい。
*/
const main = () => {
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
      let x = inputValue[0];
      let y = inputValue[1];
      if (x === 0 && y === 0) {
        break;
      }
      console.log(swapNumbers(x, y));
    }
  });
};

const swapNumbers = (x, y) => {
  let numbers = [];
  numbers.push(x);
  numbers.push(y);
  let ans = numbers.sort((a, b) => a - b).join(" ");
  return ans;
};
main();
