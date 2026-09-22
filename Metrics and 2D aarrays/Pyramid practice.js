let n=5; //
const process = require("process");

for(let i=1; i<=n; i++){
 for(let j=1; j<=i; j++){
  process.stdout.write("S");
 }
 console.log("");
}

for(let i=1; i<=n; i++){
 for(let j=3; j>=i; j--){
  process.stdout.write("S");
 }
 console.log("");
}
//////////////////////////////
for(let i=1; i<=n; i++){
    let row = "";
 for(let j=1; j<=i-1; j++){
     row += " ";
  //process.stdout.write("S");
  row = row + "*";
 }
 console.log(row);
}

for(let i=1; i<=n; i++){
 for(let j=5; j>=i; j--){
  process.stdout.write("S");
 }
 console.log("");
}

