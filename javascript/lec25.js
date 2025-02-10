// Filter
    // checks true or false for every number with a call back function and returns and a new array is created
    // Example 1
    // let arr = [13,29,34,47,58]
    // let result = arr.filter((num)=>{num%2==0;})
    // console.log(result)



    // Example 2
    // const students = [
    //     {name:"chhavi", age:19,marks:93},
    //     {name:"vanya", age:29,marks:83},
    //     {name:"disha", age:16,marks:39},
    //     {name:"dhairya", age:49,marks:73},
    //     {name:"rohit", age:10,marks:96}
    // ]

    // const result = students.filter((val)=>{return val.marks>80})
    // console.log(result)

    // const result = students.filter(({marks})=>{return marks>80})
    // console.log(result)


    

// Map - returns modifies value
const arr = [1,2,3,4,5]

// const result = arr.map((num)=>num*num)
// console.log(result)

// chaining
const res = arr.filter((num)=>num%2==0).map((num)=>num*num)
console.log(res)

// Difference between map and forEach
// map():
// Returns a new array with the results of the callback function applied to each element of the original array.
// forEach():
// Returns undefined. It doesn't create a new array; it simply performs an action on each element of the original array. 