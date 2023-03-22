/*
L 以上 R 以下の素数の個数はいくつですか。
ただし、1 は素数ではない ものとします。
*/
console.log("num = ?");
const printPrimeQty = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    let inputValue = line.trim().split(" ");
    let l = Number(inputValue[0]);
    let r = Number(inputValue[1]);
    let ans = primeInAnInterval(l, r);
    console.log(ans);
  });
};
const primeInAnInterval = (l: number, r: number) => {
  //l　以上 r　以下の素数の個数を求める。
  let result: Array<number>, flag: number;
  var x: number, j: number;
  result = [2, 3];
  for (x = l; x < r; x += 2) {
    flag = 0;
    for (j = 0; result[j] * result[j] <= x; i++) {
      if (x % result[j] === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      result.push(x);
    }
  }
  let ans = result.length;
  return ans;
};
printPrimeQty();
