// ARRAY in JS
// in js array is not stored at contiguous memory location because it doesnt follow same datatype in array is necessary because differernt types need different memory size in other languages we first define datatype of array 

// to create an array
const arr =[1,"chhavi",2,3,"kachalu",true,"bhalu","chhavi"];
console.log(arr);
// array porperties
console.log(arr[0])
console.log(arr.at(3)) //at is latest it also takes negative index= negative index like -1 starts from end it will return true
console.log(arr.length)

const newarr = arr;
console.log(arr==newarr) //because reference is copied they are pointing same array elements

const arr0 = structuredClone(arr) //it will create a clone/copy it will not point same array different address/reference
console.log(arr0==arr)

// push - add an element to last in the array
arr.push(30);
// pop - delete an element to last in the array
arr.pop();
// unshift - add an element to start in the array
arr.unshift(0);
// shift - delete an element to start in the array
arr.shift();
// delete (not the right way) - deletes the specific element but it creates hole - space is occupied even if its deletes element 
// delete arr[2] 
console.log(arr);

console.log(arr.indexOf("chhavi")) //it only tells the index of first occurence of the element
console.log(arr.lastIndexOf("chhavi")) //it tells the last index of the element

//slice the array - original array is not changed
console.log(arr.slice(3,6))
console.log(arr)

// splice
console.log(arr.splice(2,4)) 
//first value shows the start point and second value shows how many elements to display from the start point and it deletes that part of the array in the original array
console.log(arr)
// splice(starting_index,total_elements_delete,add_elements_at_same_position)
console.log(arr.splice(1,2,"bhalu","hi","aloo","hai"))
// we can also put 0 at the second value in splice to add values at any index without deleting any
console.log(arr)

// arr to string - not chnages original
console.log(arr.toString())
console.log(arr.join(" and ")) //it also make the array to string but also joins element with the specific substring given we can also add just space

// concatenation
let arr11 = [1,2];
let arr12 = [4,5,6];
let arr13 = [7,8,9];
// console.log(arr1.concat(arr2,arr3))

// concat but 2d array - array inside array as an element
arr11.push(arr13);
console.log(arr11[2]) //it displays arr3 inside arr1
console.log(arr11[2][0]);// to print element of arr3 inside arr1 we have to use [2][0]


// 2d array
let arr1 = [[1,2,3],[4,5,6],[7,8,9]]
 console.log(arr1[2][2])

// 3d array
let arr2 = [[1,[1,2,3]],[2,[4,5,6]],[3,[7,8,9]]]
console.log(arr2[0][1][2])

// flat - converting 2d array to 1d array
// console.log(arr1.flat())

// converting 3d array to 1d array
// flat by default converts it to 1 level flat so we can write 2 inside()
// or Infinity to convert it to 1d from any dimension
console.log(arr2.flat(2))

// to check if its array
console.log(Array.isArray(arr2))

// to creete array another method (not recommended)
// because it doesnt works when there is one element it only shows an arr with mentioned size it creates an empty array
let a = new Array(11)
console.log(a)