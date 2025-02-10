let obj = {
    name:"CHhavi",
    age:19,
    acc_bal:911,
    gender:"female"
};
// to access all keys in array form
const arr = Object.keys(obj) 
console.log(arr)

// to access all values in array form
const arr1 = Object.values(obj) 
console.log(arr1)

// to access all entried in array form
const arr2 = Object.entries(obj) 
console.log(arr2)

// assign use case
let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};
// let obj3= Object.assign(obj1,obj2)
// but it also changes obj1 as first value is target
let obj3= Object.assign({},obj1,obj2)
// so we give empty object as first parameter (target,source1,source2)
console.log(obj3)

// spread operator(...)
const obj4 ={...obj1,...obj2}
console.log(obj4)

// Object.freeze()
// Completely freezes the object: No properties can be added, deleted, or modified.
// Makes the object truly immutable: Even the values of existing properties cannot be changed.

// Object.seal()
// Prevents adding or deleting properties: The object's structure becomes fixed.
// Allows modification of existing property values: You can still change the values of properties as long as they are writable.





// new keyword stores in heap is stored as object 
// even string is accessed like index basis in key value pair 
// "CHhavi"
// 0:C, 1:h, 2:h, 3:a, 4:v, 5:i
// thats why string is also an object