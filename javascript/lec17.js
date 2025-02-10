let obj = {
    name:"chhavi",
    age:19,
    acc_bal:123,
    gender:"female"
}

// for in loop - it can iterate all the keys
for(let key in obj){ //here key is a variable it can be named anything
    // console.log(key);
    // console.log(key,obj[key]);
}





// Object.keys(obj) - same use
// console.log(Object.keys(obj)); // shows key as array



let obj2 = Object.create(obj) //obj is now a prototype of obj2
obj2.money = 234;
obj2.city = "mumbai";
// console.log(obj2) // it only prints obj2 properties not inherited properties from obj 
// console.log(Object.keys(obj2)) // it only prints keys of obj2




// but For In Loop in this situation - displays obj and obj2 all keys
for(let key in obj2){
    console.log(key)
}
// that concludes For In Loop has access to inherited keys also while Object.create doesnt




// But But But when we print keys of any object, we know every object has properties inherited from Object.prototype so why it doesnt prints that properties ???????????????