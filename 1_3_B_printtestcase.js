/*function main(tmp) {
    var i=0;
    while(tmp[i]!=0){
        console.log("Case " + (i+1) + ": " + tmp[i]);
        i = i + 1;
    }
}
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
  if(line==0){
  	main(lines);
  	lines='';
  }
});
process.stdin.on('end', function () {
});*/

let lines = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  outpout: process.stdout,
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
  let i = 0;
  while (value[i] != 0) {
    console.log(`Case ${i + 1}: ${value[i]}`);
    i += 1;
  }
  return;
};
