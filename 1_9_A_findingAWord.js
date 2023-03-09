/*
１つの単語 W と文章 T が与えられます。T の中にある W の数を出力するプログラムを作成して下さい。

文章 T に含まれるスペースまたは改行で区切られた文字列を単語 Ti とします。
すべての Ti において単語 W と同じになるものを数えて下さい。

なお、大文字と小文字は区別しません。
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
  let targetWord = lines.shift().toLowerCase();
  const endOfInput = /END_OF_TEXT.*/;
  let subjectSentence = lines.join(" ").toLowerCase().replace(endOfInput, "");
  let ans = subjectSentence.split(/\s/).filter((x) => x === targetWord).length;
  console.log(ans);
});
