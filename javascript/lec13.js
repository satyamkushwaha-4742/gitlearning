// Function
    // optimised way of writing code when we want to repeat the same code multiple times (it is basically a template which can be reused again and again)
    // function coding(){
    //     console.log("Hello Coder Army")
    //     console.log("coding krte raho")
    //     console.log("agr placement chahiye")
    // }

    // also we need to call the function as many times we want to get output as we made the template 
    // coding();
    // coding();
    // coding();

// Sum program using function
    // function sum(number1,number2){
        // number1 and number2 are parameters of this function(not variables) which replaced by the input given when function called
        // console.log(number1+number2)
    // }
    // sum(3,4);
    // 3 and 4 are given as input
    // they are called arguments

// Multiplication
    // function multiply(num1,num2){
    //     return num1*num2
        // return statement calculates and return the output to the function and we can print the function to see the output
    // }
    // console.log(multiply(2,4));
    // also we can store the result in variable and print the variable then
    // let result = multiply(4,5)
    // console.log(result)



// Another way to create function
    // const fun = function(){
    //     console.log("hello world");
    //     console.log("mai to badiya hu")
    // }
    // here the function is stored inside a variable fun
    // fun(in stack) stores the reference of the function which is stored in heap
    // fun();
    // console.log(fun) //it shows that [Function: fun] which means fun is a function
    // after the return if any statement is written it will not be accepted as it is returned to the function 





// Arrow Function - seeing this who can believe that this is a function
    // const func = () => { //no need to write 'function'
    //     console.log("heyooo")
    // }
    // func()

    // const add = (num1,num2)=>{ //we can add parameters normally
    //     return num1+num2;
    // }
    // console.log(add(1,2))

    // const multi = (num1,num2)=>num1*num2 //no need to write 'return' also
    // console.log(multi(5,4))

    // const cube=num=>num*num*num; //also if 1 parameter no need to add brackets
    // console.log(cube(3));







// When we dont know how many arguments we can get as input so what to write in parameters of function
    // const adding = function(...num){ //we use rest operator to take as many inputs user wants without worrying for the count
    //     console.log(num)
        // it will store all inputs as array and we can calulate sum by using for loop
    // }
    // adding(2,3,1,9,0)
    



// Spread and Rest 
    // let arr1= [1,2,3,4]
    // let arr2 = [...arr1]
    // copy arr1 to arr2 - value ko spread krdo - already array hai

    // const adding = function(...num){
    // console.log(num)
    // }
    // adding(1,2,3,4) 
    // value ek ek krke aa ri h usko vaha rest krado - yaha pe already array nai hai vo ek ek krke layega







// Object in Function 
    // let obj = {
    //     name:"chhavi",
    //     age:19,
    //     amount:10
    // }
    // function funcy(obj){
    //     console.log(obj.name,obj.amount)
    // }
    // funcy(obj)





    // using destructuring----
    // function functy({name,amount}){
    //     console.log(name,amount)
    // }
    // functy(obj)





// IMPORTANT POINTS 

// 1- JavaScript follows pass-by-value for primitive data types (like numbers, strings, booleans, null, and undefined) and pass-by-reference for non-primitive data types (like objects and arrays).

// 2 - also when we want to create an object to be protoype to other object dont use obj2.__proto__ = obj1 - not good for code reliability instead use obj2 = Object.create(obj1)

