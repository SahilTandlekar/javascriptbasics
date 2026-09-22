let Order = new Promise(function(resolve, reject){

    let FoodReady = true;
    if(FoodReady){
       resolve("Food is delivered");
    }
    else{
        reject("Food is not available");
    }

});
console.log(Order);