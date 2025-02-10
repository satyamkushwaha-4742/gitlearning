// for in loop ko array ke saath nai lete h - WHY ???

let arr = [10,20,30,40,50];
// for(let key in arr){
//     console.log(key)
// }
// it returns index as keys
// so what is the problem??

// array is an object so we can add some value like
arr.name="chhavi";
arr.age=19;
// for(let key in arr){
//     console.log(key)
// }

// if we add our values and keys it adds it after the indexes and this is not good some keys are indexes some are name,age,etc when they are enumerable it will be printed forin loop doesnt care if its array it should be in array format 
// that is the reason for in loop is not preferable with array - normal for loop will be used 
// for in loop will be used with object


for(let i = 0;i<arr.length;i++){
    console.log(i,arr[i])
}