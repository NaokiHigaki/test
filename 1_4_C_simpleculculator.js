/* 
２つの整数 a, b と１つの演算子 op を読み込んで、a op b を計算するプログラムを作成して下さい。
ただし、演算子 op は、"+"(和)、"-"(差)、"*"(積)、"/"(商)、のみとし、割り算で割り切れない場合は、小数点以下を切り捨てたものを計算結果とします。

Input
入力は複数のデータセットから構成されています。各データセットの形式は以下のとおりです：

a op b

op が '?' のとき 入力の終わりを示します。このケースの出力は行ってはいけません。

Output
各データセットについて、計算結果を１行に出力して下さい。
*/
console.log("num & op = ?");
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
    let inputValue = line.trim().split(" ");
    let a = parseInt(inputValue[0]);
    let op = inputValue[1];
    let b = parseInt(inputValue[2]);
    if (op === "?") {
      break;
    }
    console.log(culc(a, op, b));
  }
});

const culc = (x, op, y) => {
  let result = [];
  if (op === "+") {
    result = x + y;
  } else if (op === "-") {
    result = x - y;
  } else if (op === "*") {
    result = x * y;
  } else if (op === "/") {
    result = Math.floor(x / y);
  }
  return result;
};
