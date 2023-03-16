/*
3
1 1 3 8
3 2 2 7
4 3 8 1
*/

/*
Ａ大学は１フロア１０部屋、３階建ての公舎４棟を管理しています。
公舎の入居・退去の情報を読み込み、各部屋の入居者数を出力するプログラムを作成して下さい。

n件の情報が与えられます。
各情報では、４つの整数b, f, r, vが与えられます。これは、b棟f階のr番目の部屋にv人が追加で入居したことを示します。
vが負の値の場合、-v人退去したことを示します。
最初、全ての部屋には誰も入居していないものとします。

Input
最初の行に情報の数 n が与えられます。
続いて n 件の情報が与えられます。各情報には４つの整数 b, f, r, v が空白区切りで１行に与えられます。

Output
４棟について入居者数を出力して下さい。
各棟について、１階、２階、３階の順に入居者数を出力します。
各階については、１番目、２番目、・・・、１０番目の部屋の入居者数を順番に出力します。
入居者数の前には１つの空白を出力して下さい。また、各棟の間には####################(20個の#)で区切って下さい。

b棟f階のr番目の部屋にv人が追加で入居したことを示します
*/
console.log("nums = ?");
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
  lines.shift();
  console.log(showResidents(lines));
});

const showResidents = () => {
  let divider = "\n####################\n";
  let emptyRoom = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let residents = new Array(4);
  for (let blgd = 0; blgd < 4; blgd++) {
    residents[blgd] = new Array(3);
    for (let floor = 0; floor < 3; floor++) {
      residents[blgd][floor] = Array.from(emptyRoom);
    }
  }
  for (let inputValue of lines) {
    let b, f, r, v;
    [b, f, r, v] = inputValue.split(" ").map(Number);
    b -= 1;
    f -= 1;
    r -= 1;
    residents[b][f][r] += v;
  }
  let build = new Array();
  for (b = 0; b < 4; b++) {
    let building = new Array();
    for (f = 0; f < 3; f++) {
      let showResidents = " " + residents[b][f].map(String).join(" ");
      building.push(showResidents);
    }
    build.push(building);
  }
  let result = build.map((x) => x.join("\n")).join(divider);
  return result;
};
