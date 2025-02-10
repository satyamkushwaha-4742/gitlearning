// create an obj - mostly used
const obj = {
    name:"Chhavi",
    birth:2005,
    "gender":"female",
    age:19,
    20:false,
    undefined:40
}

const insta = {
    user:"userchhavi",
    pass:"1234",
    "liked posts":100
}

// how to access object
// objects define key value pair which makes it clear and very common to use object in JS
// key is stored as a string
console.log(obj)
console.log(obj.gender)
console.log(insta.user)
// one key value pair can be accessed by obj name then . and then key name

console.log(obj["name"])
// console.log(obj[gender]) //error - in square brackets it is mandatory to use double quotes

console.log(insta["liked posts"])
// key cant be written with a whitespace when not in double quotes so then it can be accessed using square brackets

console.log(obj["20"])
console.log(obj[20])
// key named as number are also treated as string but can be used without quotes

console.log(obj.undefined)
console.log(obj[undefined])
// we can also write undefined as a key same with null






// another way to create an object
const person = new Object();

// property add 
person.name = "Insaan"; 
person.age = "27";
person.gender = "male";
console.log(person);

// property delete
delete person.age;
console.log(person);

// property modify/update (if not exist it will be created else modified)
person.name = "Not Insaan"
console.log(person);








 
//third method - class object 
class people{
    constructor(PName,PAge,PGender){
        // all values go in this PName,etc
        this.name = PName
        this.age = PAge
        this.gender = PGender
        // then whichever object is called this keyword acts like (per1.name,etc) and returns the PName,etc values from the new people("chhavi",etc) as passed earlier while calling the object
        // per1.name = "chhavi" (this.name = PName)
        // constructor("Chhavi",19,"female") ----- consructor(PName,PAge,PGender)
    }
}
let per1=new people("Chhavi",19,"female")
let per2=new people("Disha",23,"female")
console.log(per1)
// it is easy to make multiple objects in 1 line(if same key just value different) - in normal method very tough to write it againa nd again

            // array and object implementation are at the end same
            // const arr = [0,25,75,100]
            // console.log(arr[1])
            // const obj2 = {
            //     0:0,
            //     1:25,
            //     2:75,
            //     3:100
            //     // it can be seen 0,1,2 in console its like an array also thats why array is automatically an object
            // }
            // console.log(obj2[1])
            // // arr.length and obj.name is working like same it is accessing these as keys

