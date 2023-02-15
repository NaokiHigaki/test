/* 
各値aiをai個の#で表したヒストグラムを描け。

入力
１行目に整数Nが与えられる。 
続くN行に整数aiがそれぞれ１行に与えられる。

出力
出力はN行からなる。 i行目にai個の#とaiを１行に出力する。
このときaiの前に１つの空白を入れる。

制約
1≤N≤100
0≤ai≤100
入出力例
入力例1
3
5
8
3
出力例1
##### 5
######## 8
### 3
*/
console.log("num = ?");
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
  const letter = "#";
  for (let i = 1; i < lines.length; i++) {
    console.log(letter.repeat(lines[i]) + " " + lines[i]);
  }
});
