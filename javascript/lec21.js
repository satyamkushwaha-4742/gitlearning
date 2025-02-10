// enumerable - if true - that key will be shown else not
let obj = {
    name:"panda",
    age:19,
    gender:"male",
}

Object.defineProperty(obj,"name",{
    enumerable:false,
})
// console.log(obj) //we cant see name key value pair as we set enumerable false





let obj2 = Object.create(obj);
obj2.id="p";
obj2.city="darjeeling";

for (let key in obj2){
    console.log(key)
}

// as here obj inherited all keys can be seen except 'name' when we access obj2 keys because its enumerable is set to false

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString')) //its enumerable is false as we can see
// we got our answer to the question - we cant see the key inherited from Object.prototype because their enumerable is set to false

// console.log(Object.getOwnPropertyDescriptor(obj,'name')) //it shows ennumerable : false