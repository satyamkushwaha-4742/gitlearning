// shallow copy - refers to same object (same address)
    // let obj1 = {
    //     a:1,
    //     b:2
    // }
    // let obj2=obj1;
    // obj2.a=10;
    // console.log(obj2,obj1);

// deep copy - creates a different copy of the object (different address)
    // let obj3 = structuredClone(obj1) 
    // obj3.a=20;
    // console.log(obj3,obj1)

// Nested Object - object k andar object
    // const user = {
    //     name : "rohit",
    //     bank_bal:102,
    //     address : {
    //         pincode:246149,
    //         city:"kotdwar"
    //     }
    // }
    // console.log(user.address.pincode)

// copying nested objects using assign
    // const user2 =Object.assign({},user);

    // it changes both obj1 and obj2 if we did change to nested object it is acting by reference (shallow copy) this is the disadvantage with using assign
    // user2.address.pincode = 247149;

    // but if we change in object normally not nested, then no change will be done to the original it acts like (deep copy)
    // user2.name = "cartoon"

    // console.log(user,user2)

// IMP - same with spread operator so it is best to use structuredClone(user) when we want two different copies without having any keypair to act as references
    // spread operator ya assign use kre nested object dono objects ke liye same hoga (original or copy k liye) baaki key pair copied hoge










// Destructuring of an Object
    // let obje = {
    //     name:"chhavi",
    //     money:100,
    //     bal:9,
    //     age:19,
    //     address:{
    //         pincode:12345,
    //         city:"Dreams",
    //         state:"mp"
    //     }
    // }
    // const {name, bal} = obje;
    // console.log(name,bal)
    // very oftenly used in react,etc

    // we can also change name while calling
    // const {name:fullnaam,bal:paisa,age:umar} = obje
    // now we have to use these names we cant access them by there original key names
    // console.log(fullnaam,paisa,umar)

    // another way to get few elements in different object and few in different
    // const {name,age,...obje1} = obje;
    // except name age every key pair will be rested in obje1 (... = rest operator) but it doesnt changes original object (it is not spread operator - spread is used for concatenating two objects)
    // console.log(obje1)

    // to deconstruct the nested object property(or keypair)
    // const {address:adds} = obje
    // console.log(adds.pincode) 


    // const {address:{pincode,state}}=obje;
    // console.log(pincode,state)

// Destructuring an Array
    // const arr = [3,2,5,6,8];

    // const[first,second] =arr
    // console.log(first,second)

    // const [first,second, ,third]=arr;
    // console.log(first,second,third)

    // const [first,second,...third]=arr;
    // console.log(third)
    // console.log(first,second,third)





// Destructuring an Array inside object
    // let obje = {
    //     name:"chhavi",
    //     money:100,
    //     bal:9,
    //     arr:[10,20,30,40],
    //     age:19,
    //     address:{
    //         pincode:12345,
    //         city:"Dreams",
    //         state:"mp"
    //     }
    // }
    // const {arr:[first]} = obje;
    // console.log(first)
 



    // object with function..
    let user={
        name:"rohit",
        amount:430,
        greet:function(){
            console.log("hello coder army");

        },
        meet:function(){
            return 20;

        }
        }
        console.log(user.greet());
        console.log(user.meet());
