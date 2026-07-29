let statuses = ["pass", "fail", "skip"];

console.log(statuses.at(-1));
console.log(statuses.at(2));

statuses[2] = "blocked";
console.log(statuses);
console.log(statuses.at(2));