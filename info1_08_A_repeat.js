/* 
単語WをN回出力せよ。

入力
整数Nが与えられる。

出力
空白または改行区切りで単語WをN個出力せよ。
Wは１文字以上20文字以下の英小文字とする。

制約
1≤N≤100
入出力例
入力例1
5
出力例1
hello
hello
hello
hello
hello
*/
console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let inputValue = line.split(" ");
  /*
  const message = "Hello World\n";
  console.log(message.repeat(inputValue));
  */
  for (let i = 0; i < inputValue; i++) {
    console.log("Hello World");
  }
});
