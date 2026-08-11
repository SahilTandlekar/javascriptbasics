let n = 5;
for(let i=n; i>=1; i--){
    for(let j=1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log("");
}
for(let i=n; i>=3; i--){
    for(let j=3; j<=i; j++){
        process.stdout.write("*");
    }
    console.log("");
}