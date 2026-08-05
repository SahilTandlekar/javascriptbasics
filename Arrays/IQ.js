let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex searches from first
let index = nums.findIndex(n => n > 20);
console.log(index);

let last = nums.findLast(n => n > 20); //  45
console.log(last); //searches form last

let indexoflast = nums.findLastIndex(n => n > 20); // 3
console.log(indexoflast);