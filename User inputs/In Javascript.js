const prompt = require('prompt-sync')(); //added this extra line

let num = prompt("Enter a number:");
num = Number(num);

if (num % 2 === 0) {
    console.log( num + " is an even");
} else {
    console.log( num + " is an odd");
}

//node "User inputs/In Javascript.js" to stop the running code which is stuck in the terminal