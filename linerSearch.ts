console.log("nums = ??");
const linnerSearch = () => {
  let lines: Array<string> = new Array();
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line: string) => {
    lines.push(line);
  });
  rl.on("close", () => {
    let searchValue: Array<string> = lines[0].trim().split(" ");
    let inputValue: Array<string> = lines[1].trim().split(" ");
    let result: string = "";
    for (let chr of inputValue) {
      if (chr === searchValue[1]) {
        result = "Yes";
        break;
      } else {
        result = "No";
      }
    }
    console.log(result);
  });
};
linnerSearch();
