/* 
３つの整数を読み込み、それらを値が小さい順に並べて出力するプログラムを作成して下さい。

Input
３つの整数が空白で区切られて与えられます。

Output
小さい順に並べ替えた３つの整数を１行に出力して下さい。整数の間に１つの空白を入れて下さい。
*/
const main = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    let inputValue = line.split(" ");
    let numbers = [];
    let a = parseInt(inputValue[0]);
    let b = parseInt(inputValue[1]);
    let c = parseInt(inputValue[2]);
    numbers.push(a);
    numbers.push(b);
    numbers.push(c);
    numbers.sort((a, b) => a - b);
    console.log(`${numbers[0]} ${numbers[1]} ${numbers[2]}`);
  });
};
main();
