/* 
X キュービック
指定された整数x の 3 乗を計算するプログラムを作成します。

入力
整数xが 1 行で与えられます。

出力
x の立方体を1 行に出力します。

制約
1≦ x ≦100

*/

const result = (x) => {
    const culc = x ** 3;
    console.log(`${x}の3乗は${culc}です。`);
    return culc;
};
result(3);
result(5);

const math = (x) => {
    return console.log(`${x}の3乗は${x ** 3}です。`);
};
console.log("\n");
console.log("ここからはmathで出力。")
math(2);
//const gg = math; 何回も使いまわせるので、わざわざ変数に代入する意味がない

console.log("\n");
console.log("ここからはtestの出力。")
const test = (x) => {
    return x;
};

console.log(`${test(6)}の3乗は${test(5) ** 3}です`);