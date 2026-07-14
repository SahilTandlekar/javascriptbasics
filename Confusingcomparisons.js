console.log("" == 0);
console.log("" === 0);
console.log("" === "0");

console.log(null == undefined);
console.log(null=== 0);
console.log(null == 0); //null is not equal to zero
console.log(undefined === 0);
console.log(null > 0 );
console.log(null >= 0); //something greater than zero

// console.log(3 > 4);
// console.log(3 < 4);
// console.log(4 >= 4); // (4 > 4 or 4 == 4, or gate)

// console.log(5 == "5"); // lose couple comparsion , value
// console.log(5 === "5"); // stict not allowed - valeu + datatype both

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

// console.log(3 == "4");
// ! -> not char
console.log(5 != "5"); // lose -> datatype or value
console.log(5 !== "5"); // true
// console.log(5 !=== "5"); This dosn't