/*
矩形
与えられた長方形の面積と周長を計算するプログラムを書きなさい。

入力
長方形の長さaと幅bは、1 つのスペースで区切られた行で指定されます。

出力
長方形の面積と周囲を一列に出力します。2 つの整数は、1 つのスペースで区切る必要があります。

制約
1≦ a、b ≦100
*/
/*const square = (x, y) => { 
    const result = x * y;
    console.log(`xの値が${x}、yの値が${y}の四角形の面積は${result}です`)
    return result;
};

square(3, 5);
square(55, 66);
square(2, 5);

const circle = (x) => { 
    const result = x * 2 * 3.14;
    console.log(`半径が${x}の円の円周の長さは${result}です。`);
    return result;
};

circle(5);
circle(10);

console.log(`答え：${square(3, 5)}, ${circle(5)}`);*/

/*let radius = Math.floor(Math.random() * 1000000);
const culc = (r) => {
    let area = r ** 2 * Math.PI;
    let circumference = r * 2 * Math.PI;
    return [area, circumference];
};
const main = () => {
    console.log(`radius = ${radius}`);
    console.log(`面積：${culc(radius)[0]}, 円周長：${culc(radius)[1]}`); 
    return;
};
main();*/

const main = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let num = line.split(' ');
        let vertical = parseInt(num[0]);
        let horizonal = parseInt(num[1]);
        let area = vertical * horizonal;
        let circumference = vertical * 2 + horizonal * 2;
        console.log(`${area} ${circumference}`);
    })
    return;
};
main();