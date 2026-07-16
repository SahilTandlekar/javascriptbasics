const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number of open defects: ', (Opendefects) => {
  // Convert input to a number to make sure it evaluates correctly
  let status = Number(Opendefects) === 0 ? "Yes" : "No";
  console.log(status);
  
  rl.close(); // Closes the terminal listener
});
