console.log("message = ?");
let lines = new Array();
let re = /[\n\s]/;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  let a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0,
    l = 0,
    m = 0,
    n = 0,
    o = 0,
    p = 0,
    q = 0,
    r = 0,
    s = 0,
    t = 0,
    u = 0,
    v = 0,
    w = 0,
    x = 0,
    y = 0,
    z = 0;
  let inputValue = "";
  let str = "";
  for (let line of lines) {
    inputValue = line.trim().split(re);
    str = inputValue.join(" ");
  }
  for (let chr of str) {
    if (chr === "a" || chr === "A") {
      a += 1;
    } else if (chr === "b" || chr === "B") {
      b += 1;
    } else if (chr === "c" || chr === "C") {
      c += 1;
    } else if (chr === "d" || chr === "D") {
      d += 1;
    } else if (chr === "e" || chr === "E") {
      e += 1;
    } else if (chr === "f" || chr === "F") {
      f += 1;
    } else if (chr === "g" || chr === "G") {
      g += 1;
    } else if (chr === "h" || chr === "H") {
      h += 1;
    } else if (chr === "i" || chr === "I") {
      i += 1;
    } else if (chr === "j" || chr === "J") {
      j += 1;
    } else if (chr === "k" || chr === "K") {
      k += 1;
    } else if (chr === "l" || chr === "L") {
      l += 1;
    } else if (chr === "m" || chr === "M") {
      m += 1;
    } else if (chr === "n" || chr === "N") {
      n += 1;
    } else if (chr === "o" || chr === "O") {
      o += 1;
    } else if (chr === "p" || chr === "P") {
      p += 1;
    } else if (chr === "q" || chr === "Q") {
      q += 1;
    } else if (chr === "r" || chr === "R") {
      r += 1;
    } else if (chr === "s" || chr === "S") {
      s += 1;
    } else if (chr === "t" || chr === "T") {
      t += 1;
    } else if (chr === "u" || chr === "U") {
      u += 1;
    } else if (chr === "v" || chr === "V") {
      v += 1;
    } else if (chr === "w" || chr === "W") {
      w += 1;
    } else if (chr === "x" || chr === "X") {
      x += 1;
    } else if (chr === "y" || chr === "Y") {
      y += 1;
    } else if (chr === "z" || chr === "Z") {
      z += 1;
    }
  }
  console.log(
    `a : ${a}\nb : ${b}\nc : ${c}\nd : ${d}\ne : ${e}\nf : ${f}\ng : ${g}\nh : ${h}\ni : ${i}\nj : ${j}\nk : ${k}\nl : ${l}\nm : ${m}\nn : ${n}\no : ${o}\np : ${p}\nq : ${q}\nr : ${r}\ns : ${s}\nt : ${t}\nu : ${u}\nv : ${v}\nw : ${w}\nx : ${x}\ny : ${y}\nz : ${z}`
  );
});
