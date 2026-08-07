// function getStatus(code) {
//     if (code >= 200 && code < 300) {
//         return "Success";
//     } else if (code >= 400 && code < 500) {
//         return "client error";
//     } else if (code >= 500) {
//         return "server error";
//     } else {
//         return "unknown";
//     }
// }

// getStatus(200); 
// getStatus(404);
// getStatus(500); 


// // Returns nothing → undefined
// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }

// logTest("Hi this is a a log");


// function aaa() {
//     return [2, 2, 3, 5, 4];
//     /// return {"name : pramod"}; - object
// }

function statusofcode(code){
    if (code >= 100 && code < 200){
        return "success";
    }else if (code >= 200 && code < 300){
        return "Client error";
    }
    else if( code >= 300 && code< 400){
return "backend error";
    }
    else return "unknown";
}

console.log(statusofcode(150));
console.log(statusofcode(250));
console.log(statusofcode(350));
console.log(statusofcode(500));