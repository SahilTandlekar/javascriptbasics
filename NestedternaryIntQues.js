let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);