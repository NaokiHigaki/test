/*
与えられた数列を逆順に出力するプログラムを作成して下さい。

Input
入力は以下の形式で与えられます：

n
a1 a2 . . . an
n は数列の長さを示し、ai は i 番目の数を表します。

Output
逆順の数列を１行に出力して下さい。数列の要素の間に１つの空白を入れて下さい（最後の数の後に空白は入らないことに注意して下さい）。
*/

const main = () => {
  const lines = [];
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let inputValue = lines[1].trim().split(/\s+|$/).map(Number);
    console.log(inputValue.sort().join(" "));
  });
};
main();
