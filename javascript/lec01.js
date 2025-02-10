// declare variable
// let num = 100;
// console.log(num)

// datatypes can be stored in this variable :-
// primitive - number,string,boolean,big int,null,undefined,symbol
let acc_balance = 2000;
console.log(typeof acc_balance)

let str = "aaj mausam bohot acha hai"
console.log(typeof str)

let bhoola = true
console.log(typeof bhoola)

let verybig = 1202498373023239470134031n
console.log(typeof verybig)
// ṇ at the end displays that the number is really big
// normal nnumber is 64bit
// more than 64bit number will not store and create dataloss so bigint is used
// 1st bit is for sign 1 for negative 0 for positive - in JS 
// also number 0 has two representations 100,000

let intelligency = null
console.log(typeof intelligency)
// null type is displayed object as error because js was made in 10days
// why it was not updated in future because in some old websites code is not updated nor the version if updated can disrupt the whole website and create conflicts as new websites will show null and old will show object so the mistake is continued till now 

let stupidity;
console.log(typeof stupidity)


// non primitive - array,object,function