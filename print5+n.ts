/* 
りんごが 5 個あり、みかんが N 個あります。
整数 N が与えられるので、りんごとみかんを合わせて何個あるかを出力するプログラムを作成してください。
*/
console.log("num = ?");
const printPlusFive = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue = parseInt(line);
    let ans = inputValue + 5;
    console.log(ans);
  });
};
printPlusFive();
