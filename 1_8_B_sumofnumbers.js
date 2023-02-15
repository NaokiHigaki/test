/* 
与えられた数の各桁の和を計算するプログラムを作成して下さい。

Input
複数のデータセットが入力として与えられます。各データセットは１つの整数 x を含む１行で与えられます。

x は 1000 桁以下の整数です。
x が 0 のとき入力の終わりとします。このデータセットに対する出力を行ってはいけません。

Output
各データセットに対して、x の各桁の和を１行に出力して下さい。
*/

const main = () => {
  let lines = [];
  let readline = require("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    lines.push(line);
  });
  rl.on("close", () => {
    for (let line of lines) {
      if (line === "0") {
        break;
      }
      console.log(culc(line));
    }
  });
};

const culc = (num) => {
  return num
    .split("")
    .map(Number)
    .reduce((current, next) => {
      return current + next;
    });
};
main();

/*let lines = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
  if (line == 0) {
    main(lines);
    lines = "";
  }
});
process.stdin.on("end", () => {
  return;
});

const main = (value) => {
  let num = value.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sun + parseInt(num[i]);
  }
  console.log(parseInt(sum));
  return;
};
main();*/
/*const rankSum = () => { 
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => { 
        let value = line.split(' ');
        let num = value.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++) { 
            sum = sum + parseInt(num[i]);
        }
        console.log(parseInt(sum));
        return;
    })
};
rankSum();*/

/* 
var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});
/* 入力は 
123
55
1000
0
*/
/*
reader.on('close', () => {
    for (var line of lines) {
	if (line==="0") {
	    break;
	}
	console.log(aux(line));
    }
});

function aux(s)
{
    return(s.split('').map(Number).reduce((s,x)=>{return s+x}))
}
*/
