// Set - colection of unique values and it can be of any types like primitives or objects - array values can be duplicate but in set it cant be
    // How to Create
        // const set1 = new Set([10,30,10,30,40]); //type - object
        // console.log(set1) 
    // another way
        // const set2=new Set();
        // set2.add(10);
        // set2.add(30);
        // set2.add(20);
        // set2.add("chhavi");
        // set2.add("chhavi");

        // set2.delete(30);

        // set2.clear();    

        // let check = "chhavi"
        // console.log(set2.has(check));

        // console.log(set2.size)

        // console.log(set2);

    // array to set
        // let arr = [1,2,3,4,5];
        // const set1 = new Set(arr);

    // set to array
        // arr = [...set1];
        // console.log(arr)

    // Union - combine of 2 arrays removing if any common elements
    let set1=new Set([10,20,30,40,50])
    let set2=new Set([11,20,30,40,55])
    // let set3=new Set([...set1,...set2])
    // console.log(set3)

// Intersection - only the common elements using filter(filter only supports array)
    const result = new Set([...set1].filter((num)=>set2.has(num)));
    // console.log(result)

// Iterate over Set
    // using for of loop
    // for(let value of result){
    //     console.log(value)
    // }

    // using forEach
    // result.forEach((value)=>console.log(value));
    