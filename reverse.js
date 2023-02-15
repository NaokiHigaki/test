const sortReverse = (array) => {
    let sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray);
    let result = sortedArray.reverse();
    return result;
};
const test = [2, 4, 55, 3, 45, 9];

console.log(sortReverse(test));

const sort = (array) => { 
    let sortedArray = array.sort(function (a, b) {return a - b}); 
    let result = sortedArray.reverse();
    return result;
};
const numbers = [123, 55, 789, 43, 67, 1, 9, 9999];
console.log(sort(numbers));
