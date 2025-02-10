// configurable - if true - writable and enumerable can be changed else not
let obj = {
    name:"horse"
};

    // here properties for an object can be defined we can also define the values for writable,configurable and enumerable for the object here only
Object.defineProperty(obj,'name',{
    writable:true,
    enumerable:true,
    configurable:false,
})

Object.defineProperty(obj,'name',{
    writable:false,
})

obj.name="panda";

console.log(obj)

// doubt - configurable false h firr b writable change ho rha h it is applying false isliye name value change nai hui




// HOMEWORK - Object.defineProperties
// Object.defineProperties(obj,{
//     name:{
//         value:"panda",
//         writable:true,
//         enumerable:true,
//         configurable:false,
//     },
//     work:{
//         value:"eat & sleep",
//         writable:true,
//         enumerable:true,
//         configurable:false,
//     },
// })