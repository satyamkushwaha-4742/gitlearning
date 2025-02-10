// Number
let num1 = 124;
// new keyword always creates a object and stores the values in heap and address to that in stack
let num2 = new Number (124);
let num3 = new Number (124);
console.log(typeof newNum)

console.log(num1==num2) //true
// object will be converted to number then compared

console.log(num2==num3) //false
// here both are objects so no conversion address will be compared

// Number Properties
let num = 124.54
console.log(num.toFixed(5)) // it shows fixed value after the decimal till the point provided 
console.log(num.toPrecision(4)) //it rounds off the value till the index provided
console.log(num.toExponential(0)) // decimal ke baad kitne number chahiye utne leke or baaki * e+2 (10 ki power 2 or exponential form)
console.log(num.toString()) //converts number to string
console.log(typeof num.toString()) 
console.log(num.valueOf()) //nothing just tells the value

// MATH in JS
console.log(Math.E) // E(Euler's number) - mathematical constant approximately equal to 2.718.
console.log(Math.LN10) //log10 ki value - iska base E hai  
console.log(Math.PI) //value of PI
console.log(Math.random()) //0>=value<1
console.log(Math.random()*10) //to get values between 0 - 9
// floor and ceil
console.log(Math.floor(Math.random()*10)) //floor for removing decimals by rounding off number to neeche wali value like 23.9 also is 23 in floor and in ceil 23.2 is also 24 upr wali value
console.log(Math.ceil(Math.random()*10)) //0-10
console.log(Math.floor(Math.random()*10+1)) //1-10
console.log(Math.floor(Math.random()*10+11)) //11-20 (0 to 9)+11

// 0-10 in floor (max-min+1) -> (10-0+1) = 11(how many numbers are in the range can also be written)
console.log(Math.floor(Math.random()*11))

// if you want to print random values between min - 40 and max - 50, formula:
// console.log(Math.floor(Math.random()*(max-min+1)+min))  
// +min for range like 2-14 (0-11 we know -> *12) and when we do +2 it becomes 2-14 range
console.log(Math.floor(Math.random()*(50-40+1)+40))
// (50-40+1) only shows 0-10 numbers +40 for 40-50 range


// Ludo Game
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1))
// these random number is given by doing some operations on the system clock - which shows time in our system 
// thats why otp dont use this random function as it can be guessed if hacker can see system clock