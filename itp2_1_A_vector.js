/* 
整数を保持する可変長配列
A={a0, a1, ...}
に対して、以下の操作を行ってください。

pushBack(x): 
Aの末尾に整数
xを挿入する
randomAccess(p):
Aの要素apの値を出力する
popBack(): 
Aの末尾の要素を削除する
Aは0-オリジンでインデックスが付けられ、初期状態では空とします。*/

//yieldをアロー関数で使用できない。
console.log("num = ?");
function* main() {
  const result = [];
  const q = Number(yield 0);
  for (let i = 0; i < q; i++) {
    const ps = (yield 0).split(" ");
    const qq = Number(ps[0]);
    if (qq === 0) {
      result.push(Number(ps[1]));
    } else if (qq === 1) {
      const n = result[Number(ps[1])];
      console.log(String(n));
    } else if (qq === 2) {
      result.pop();
    }
  }
}
const m = main();
m.next();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});
rl.on("line", (line) => {
  m.next(line);
});
