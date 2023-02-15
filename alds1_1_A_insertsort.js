/* 
挿入ソートは次のようなアルゴリズムになります。

1 insertionSort(A, N) // N個の要素を含む0-オリジンの配列A
2   for i が 1 から N-1 まで
3     v = A[i]
4     j = i - 1
5     while j >= 0 かつ A[j] > v
6       A[j+1] = A[j]
7       j--
8     A[j+1] = v
N 個の要素を含む数列 A を昇順に並び替える挿入ソートのプログラムを作成してください。
上の疑似コードに従いアルゴリズムを実装してください。
アルゴリズムの動作を確認するため、各計算ステップでの配列（入力直後の並びと、各 i の処理が終了した直後の並び）を出力してください。

入力
入力の最初の行に、数列の長さを表す整数 N が与えられます。2 行目に、N 個の整数が空白区切りで与えられます。

出力
出力は N 行からなります。挿入ソートの各計算ステップでの途中結果を 1 行に出力してください。
配列の要素は１つの空白で区切って出力してください。最後の要素の後の空白など、余計な空白や改行を含めると Presentation Error となりますので注意してください。
*/
console.log("num = ?");
let lines = [];
let reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let quantity = parseInt(lines[0]);
  let element = lines[1].split(" ").map(Number);
  console.log(lines[1]);

  for (let i = 1; i < quantity; i++) {
    let tmp = element[i];

    for (var j = i - 1; j >= 0; j--) {
      if (element[j] > tmp) {
        element[j + 1] = element[j];
      } else {
        break;
      }
    }
    element[j + 1] = tmp;
    console.log(element.join(" "));
  }
});
