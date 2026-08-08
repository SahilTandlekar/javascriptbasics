let env = "staging";
function setup(){
    let timeout = 1000;
    console.log(env);
    console.log(timeout);
}
setup();
console.log(env);
console.log(timeout); //reference error since timeout is not defined outside
