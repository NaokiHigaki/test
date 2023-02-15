/* 
スタックはLIFO (Last In First Out）の制約に基づいて、データの中で最後に挿入されたものを先に取り出すデータ構造です。

整数を保持する
n個のスタック
Si(i=0, 1, ..., n−1)に対して、以下の操作を行ってください。

push(t, x): 
Stに整数xを挿入する。
top(t): 
Stから次に取り出される要素を報告する。ただし、
Stが空の場合は何もしない。
pop(t): 
Stから要素を取り出し削除する。ただし、
Stが空の場合は何もしない。
初期状態で、すべてのスタックは空とします。

Input
入力は以下の形式で与えられます。

nq

query1

query2
:
queryq

各クエリ
queryiは
0 tx
または
1 t
または
2 t
の形式で与えられます。
最初の数字0, 1, 2 は操作の種類を示し、それぞれpush、top、popを表します。

Output
各top操作ごとに、整数を１行に出力してください。
*/
/*const input = 1 ? process.stdin : require("fs").createReadStream("./inp.txt");
const stdin = [];
require("readline")
  .createInterface({ input })
  .on("line", (line) => stdin.push(line))
  .on("close", () => main(stdin, process.stdout));
// 以下 main 内に処理を追加
function main(si, so) {
  let line = si[0];
  let num = line.split(" ");
  let array = new Array();
  for (let i = 0; i < num[0]; i++) {
    array[i] = new Array();
  }
  for (let i = 1; i <= num[1]; i++) {
    let line = si[i];
    let num = line.split(" ");
    if (num[0] == "0") {
      // 指定されたスタックに積む
      array[num[1]].push(num[2]);
    } else if (num[0] == "1") {
      // 指定されたスタックの最も上の要素を表示
      if (array[num[1]].length != 0) {
        so.write(array[num[1]][array[num[1]].length - 1] + "\n");
      }
    } else {
      //指定されたスタックの最も上の要素を消去
      if (array[num[1]].length != 0) {
        array[num[1]].pop();
      }
    }
  }
}*/
console.log("num = ?");
/*let lines = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let line = lines[0];
  let num = line.split(" ");
  let array = new Array();
  for (let i = 1; i < num[0]; i++) {
    array[i] = new Array();
  }
  for (let i = 1; i <= num[i]; i++) {
    let line = lines[1];
    let num = line.split(" ");
    if (num[0] == "0") {
      array[num[0]].push(num[2]);
    } else if (num[0] == "1") {
      if (array[num[1]].length != 0) {
        console.log(array[num[1]][array[num[1]].length - 1] + "\n");
      }
    } else {
      if (array[num[1]].length != 0) {
        array[num[1]].pop();
      }
    }
  }
});*/
const input = 1 ? process.stdin : require("fs").createReadStream("./inp.txt");
const stdin = [];
require("readline")
  .createInterface({ input })
  .on("line", (line) => stdin.push(line))
  .on("close", () => main(stdin, process.stdout));

function main(si, so) {
  let line = si[0];
  let num = line.split(" ");
  let array = new Array();
  for (let i = 0; i <= num[0]; i++) {
    array[i] = new Array();
  }
  for (let i = 1; i <= num[1]; i++) {
    let line = si[i];
    let num = line.split(" ");
    if (num[0] == "0") {
      array[num[1]].push(num[2]);
    } else if (num[0] == "1") {
      if (array[num[1]].length != 0) {
        so.write(array[num[1]][array[num[1]].length - 1] + "\n");
      }
    } else {
      if (array[num[1]].length != 0) {
        array[num[1]].pop();
      }
    }
  }
}
