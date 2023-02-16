/* 
与えられた文字列の小文字と大文字を入れ替えるプログラムを作成してください。

Input
文字列が1行に与えられます。

Output
与えられた文字列の小文字と大文字を入れ替えた文字列を出力して下さい。アルファベット以外の文字はそのまま出力して下さい。
*/
console.log("message = ?");
let lines = new Array();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let inputValue = lines[0];
  console.log(searchAlphabet(inputValue));
});

const searchAlphabet = (chr) => {
  let result = "";
  for (let i = 0; i < chr.length; i++) {
    let letter = chr[i];
    result += changeCase(letter);
  }
  return result;
};

let reLower = /[a-z]/;
let reUpper = /[A-Z]/;
const changeCase = (letter) => {
  if (reLower.test(letter)) {
    return letter.toUpperCase();
  } else if (reUpper.test(letter)) {
    return letter.toLowerCase();
  } else {
    return letter;
  }
};
