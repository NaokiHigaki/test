const result = (x, y, z) => {
    let numbers = [x, y, z];
    let sortResult = numbers.sort();
    return sortResult;
};

console.log(result(99, 88, 33));
//console.log(result(88, 33, 99));
console.log(result(0, 1, 3));
console.log(result(103, 100, 101));