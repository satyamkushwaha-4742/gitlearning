let obj = {};
obj.age=19;
obj.name="chhavi"; //key = value

// then comes writable,enumerable,configurable
// how to see these
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// these are added by default

// writable - if true - value can be changed else not

    // here properties for an object can be defined we can also define the values for writable,configurable and enumerable for the object here only
    Object.defineProperty(obj,'name',{
        value:"chhavi",
        writable:false,
        enumerable:true,
        configurable:true,
    })
    obj.name="not-chhavi"

console.log(obj);