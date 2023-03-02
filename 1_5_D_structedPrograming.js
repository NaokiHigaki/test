/*
void call(int n){
  int i = 1;
 CHECK_NUM:
  int x = i;
  if ( x % 3 == 0 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
 INCLUDE3:
  if ( x % 10 == 3 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
  x /= 10;
  if ( x ) goto INCLUDE3;
 END_CHECK_NUM:
  if ( ++i <= n ) goto CHECK_NUM;

  cout << endl;
}
*/

console.log("num = ?");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  let x = i;
  for (let i = 1; i <= line; i++) {
    if (x % 3 === 0) {
      console.log(` ${i}`);
    } else if (x % 10 === 3) {
      console.log(` ${i}`);
    }

    console.log("\n");
  }
});
