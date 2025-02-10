// Global Scope - apne program me kahi b access kr skte h even inside function/if else
    // let a = 1;
    // const b = 2;
    // var c = 3;
    // console.log(a);
    // console.log(b);
    // console.log(c);

// Local Scope(Functional Scope)
    // function greet(){
    //     let a = 1;
    //     const b = 2;
    //     var c = 3;
    //     console.log("Function Run Hua Hai (For Check)")
    // }
    // greet();
    // console.log(a,b,c); //no access outside the function

// Block Scope - curly braces start and end - if else, for loop
// IMP - var doesnt supports block scope

    // if(true){
    //     let a = 1;
    //     const b = 2;
    //     var c = 3;
    // }

// PROBLEMS WITH var
    
    // console.log(a); //no access outside the block 
    // console.log(b); //no access outside the block
    // console.log(c); //can be accessed outside the block
    // thats the reason why we dont use var for creating variable

    // also we can declare same name for a variable with different values multiple times this is not with let, const
    // var aloo = 12
    // var aloo = "chhavi"
    // console.log(aloo)

    // also we can access a variable before declaring if through var it will show undefined
    // console.log(c)
    // var c = 10;
    // console.log(a) - error - not allowed with let
    // let a = 10; - error - not allowed with let

// same with function when created normally it is allowed to access it before function is actually created but when defined with variable it can't be accessd before function created

fun(); //allowed
function fun(){
    console.log("hello")
}
// apple(); //not allowed
let apple = function bun(){
    console.log("hello")
}