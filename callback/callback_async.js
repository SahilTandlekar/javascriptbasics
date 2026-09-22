function garimaStory(item, CallMeWhenStoreIsEmpty){
    console.log("The store is busy");
    console.log("The store is empty");
    CallMeWhenStoreIsEmpty();
}
garimaStory(" Start shipping", ()=>{
    console.log("lets start shopping");
})