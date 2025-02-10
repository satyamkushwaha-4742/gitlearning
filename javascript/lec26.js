// REDUCE
    // arr.reduce(call back function(accumultar,current value), initialisation)
    // current value - 1 by 1 value is coming from array that value is current value
    // acc - jo b function se return kroge vo accumulator k andar jayega
    // 3rd parameter will be index and 4th will be array
    // jo b value hum initialise krenge vo acc k andar chli jayegi 

// Example 1
    // const arr = [10,12,14,16,18];
    // const result= arr.reduce((acc,curr)=>acc+curr, 0);
    // console.log(result);

// Example 2    
let arr = ["orange","apple","banana","pineapple","orange","grapes","banana"]
// we want result in obj form like:
// orange:2 
// apple:1

const result=arr.reduce((acc,curr)=>{
    // firstly we will check if orange property is there in acc/object if yes plus 1 will be done if not it will be created
    if(acc.hasOwnProperty(curr)){
        acc[curr]++;
    }
    else{
        acc[curr]=1;
    }

    return acc;
},{orange:1,
    apple:3,
})
console.log(result);
// imagine if we have 1 orange,3 apples at the beginning