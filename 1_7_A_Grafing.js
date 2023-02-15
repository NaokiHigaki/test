/* 
あなたの課題は、あるクラスの数学の成績を付けるプログラムを作成することです。

プログラムは複数の学生のテストの点数を読み込みます。

テストの点数は、中間試験の点数 m、期末試験の点数 f、再試験の点数 r で構成されています。

中間試験と期末試験は 50 点満点（m, f ≤ 50）、再試験は 100 点満点 （r ≤ 100）です。

試験を受けていない場合は点数を -1 とします。

以下の手順で成績が付けられます：

中間試験、期末試験のいずれかを欠席した場合成績は F。
中間試験と期末試験の合計点数が 80 以上ならば成績は A 。
中間試験と期末試験の合計点数が 65 以上 80 未満ならば成績は B。
中間試験と期末試験の合計点数が 50 以上 65 未満ならば成績は C。
中間試験と期末試験の合計点数が 30 以上 50 未満ならば成績は D。 ただし、再試験の点数が 50 以上ならば成績は C。
中間試験と期末試験の合計点数が 30 未満ならば成績は F。
Input
複数のデータセットが入力として与えられます。各データセットでは、空白で区切られた m、f、r が 1 行に与えられます。

m、f、r がすべて -1 のとき入力の終わりとします。

データセットの数（生徒の数）は 50 を超えません。

Output
各データセットについて、成績（A、B、C、D、または F）を１行に出力して下さい。
*/

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
  let scores = [];
  let m, f, r;
  for (let line of lines) {
    [m, f, r] = line.trim().split(" ").map(Number);
    if (m == -1 && f == -1 && r == -1) {
      break;
    }
    scores.push([m, f, r]);
  }
  console.log(culc(scores));
});

const culc = (scores) => {
  let result = [];

  for (let score of scores) {
    let grade, m, f, r;
    [m, f, r] = score;
    if (m == -1 || f == -1) {
      grade = "F";
    } else if (m + f >= 80) {
      grade = "A";
    } else if (m + f >= 65) {
      grade = "B";
    } else if (m + f >= 50) {
      grade = "C";
    } else if (m + f >= 30 && r >= 50) {
      grade = "C";
    } else if (m + f >= 30) {
      grade = "D";
    } else {
      grade = "F";
    }
    result.push(grade);
  }
  return result.map(String).join("\n");
};
