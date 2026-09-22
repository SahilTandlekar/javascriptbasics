function placeorder(item, callback){
    console.log("Place the order for...", item);
    callback();

}
placeorder("shawarma", function(){
    console.log("Order placed successfully!", "shawarma", "pick it up")
});