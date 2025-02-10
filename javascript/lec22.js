// for of loop - to get access of elements of (best for)array and string




    // Array
        // const arr = [11,22,33,44,55]
        // for(let value of arr){
        //     console.log(value)
        // } 



    // String
        // const name ="chhavi";
        // for(let c of name){
        //     console.log(c)
        // }





    // Object
        // const obj = {
        //     name:"chhavi",
        //     age : 19,
        //     gender: "female",
        // }

        // for(let value of obj){
        //     console.log(value)
        // }

         //Type error - object is not iterable as for of loop is not suitable for iterating over objects not supported
        // as object doesnt follow any order or index - vo elements apne according select krke print krta hai like it is showing 1:100 before 2:1000 no matter what the order is when obj defined
       
       
       
       
        // const obj = {
        //     2:1000,
        //     1:100,
        //     name:"chhavi",
        //     age : 19,
        //     gender: "female",
        // }
        // console.log(obj)

        // but still if you want to use for of loop for object - in the form of array 
        // for(let value of Object.keys(obj)){
        //     console.log(value,obj[value])
        // }





// Another way to iterate over Array