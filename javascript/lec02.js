        // symbol is tough for now so it will be covered later

        // Non Primitive Datatype
        // array, object, function

//Array
let n = 10
let n2 = 100
let n3 = 1000
// we dont need to make variables multiple time 
// it is not necessary that the values must be of same datatype in JS
let arr = [10,100,1000,"Chhavi","Vanya"]
console.log(arr)
console.log(typeof arr) //type-object

// Object
// key:value
// for keeping a user data or similar together in a key value structure, it is helpful in some cases like instagram user data, bank user data
let obj = {
    std_id : 14,
    std_name : "Chhavi",
    std_class : "BCA"
}
console.log(obj)
console.log(typeof obj) // type - object
// class is not necessary in JS
// object is very important

// Function
// function ko variable me assign kr skte h in JS
let fun = function(){
    console.log("Hello Coder !")
    return 10;
}
fun() //function calling

console.log(fun()) //to print return statement
console.log(typeof fun) //type-function