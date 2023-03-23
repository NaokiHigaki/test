/*
1 以上 N 以下の整数のうち、10 進法での各桁の和が A 以上 B 以下であるものの総和を求めてください。
*/
console.log("nums = ?");
const printSomeSums = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    console.log(culcSomeSums(line));
  });
};
const culcSomeSums = (line: string) => {
  let ansArray: Array<string> = new Array();
  let inputValue = line.trim().split(" ");
  let numInputValue = inputValue.map((element) => Number(element));
  let endNum = numInputValue[0];
  let bottomBorderNum = numInputValue[1];
  let topBorderNum = numInputValue[2];
  let sum = 0;
  for (var i = 1; i <= endNum; i++) {
    // iの各桁を調べる必要がある。
    let num = i.toString();
    for (var j = 0; j < num.length; j++) {
      sum = sum + parseInt(num[i]);
      if (sum >= bottomBorderNum && sum <= topBorderNum) {
        ansArray.push(num);
      }
    }
  }
  let numAnsArray = ansArray.map((x) => Number(x));
  let ans = numAnsArray.reduce((sum, element) => sum + element, 0);
  return ans;
};
printSomeSums();
/*
function allsum(num){

    //String型に変換
    num = num.toString();

    //各桁の和を表す変数sumを定義
    let sum = 0;

    //文字列のi番目を取り出し、sumに足していく
    for(let i=0; i < num.length; i++){
    sum = sum + parseInt(num[i])
  }
  return parseInt(sum);
}
*/

/*
let result = [48, 75, 92, 61, 54, 83, 76];
let total = result.reduce((sum, element) => sum + element, 0);
*/
