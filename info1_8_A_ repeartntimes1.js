/* 
単語WをN回出力せよ。

入力
整数Nが与えられる。

出力
空白または改行区切りで単語WをN個出力せよ。
Wは１文字以上20文字以下の英小文字とする。
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  let inputValue = Number(line);
  const letter = "Hello";
  for (let i = 0; i < inputValue; i++) {
    console.log(letter);
  }
});
