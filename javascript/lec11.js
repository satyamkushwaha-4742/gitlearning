        let user1 = {
            name:"chhavi",
            age:19
        }
        let user2 = {
            amount:200,
            money:100
        }

        // each of them has their different properties defined
        console.log(user1.name)
        console.log(user2.name) //undefined

        // but to use properties of another object like we use built in properties we can do----
        // user2.__proto__=user1
        // console.log(user2.name)
        // now user1 properties can be accessed by user2 as it made user1 as prototype - user2 inherited properties of user1
        // exactly like normally the launched product has additiional properties with the properties its prototype had





        
// Prototype Chaining
// ANSWER TO THE MAIN QUESTION in functions.js

    // so exactly Array.prototype is an object which includes all the functions which we see as built in now and when we made our array as arr and write arr.__proto__  it inherits all the properties from that object
    // also we can see Object.protoype to get all built in properties and it is same as arr.__proto__.__proto__ or Array.prototype.__proto__ as Object.prototype inherits prototype from Array.prototype and Object.prototype also contains some additional properties
    // it is like an heirarchy 1st - arr[1,2,3,4] 2nd - arr.__proto__ (or Array.prototype) which shows array properties 3rd arr.__proto.__proto__(Array.protoype.__proto__) which shows same properties as Object.prototype
    // .__proto__ acts as incresing tool for the heirarchy level
    // but no more higher level is there it shows null 
    
// lets check if arr.__proto__ and Array.prototype are equal
    // const arr=[1,2,3,4]
    // console.log(arr.__proto__==Array.prototype) //true
    // console.log(arr.__proto__.__proto__==Object.prototype) //true
    // console.log(arr.__proto__.__proto__.__proto__==null) //true

    // so basically Array.prototype is the built in object which defines all array properties and when we write .__proto__ after our array name we call that object to see its properties