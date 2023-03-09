/*
次のC++言語のプログラムと同じ動作をするプログラムを作成してください。
ただし、goto 文は使わないで実装してみましょう。

void call(int n){
  int i = 1;
 CHECK_NUM:
  int x = i;
  if ( x % 3 == 0 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
 INCLUDE3:
  if ( x % 10 == 3 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
  x /= 10;
  if ( x ) goto INCLUDE3;
 END_CHECK_NUM:
  if ( ++i <= n ) goto CHECK_NUM;

  cout << endl;
}
*/

console.log("num = ?");
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
  let re = /\s+|$/;
  let inputValue = lines[0].trim().split(re).map(Number);
  let n = inputValue[0];
  checkNum(n);
});

const checkNum = (n) => {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    let x = i;
    if (x % 3 === 0) {
      ans += " " + i.toString();
    } else {
      while (x > 0) {
        if (x % 10 === 3) {
          ans += " " + i.toString();
          break;
        }
        x = Math.floor(x / 10);
      }
    }
  }
  console.log(ans);
};
