// Map - collection of key value pair and key should be unique and it can be any type(number,string,any primitive type,also object,functions) making it different from object as it can be string or symbol only and also map maintains the order of its elements based on insertion
    // how to create
        // const map1 = new Map();
        // map1.set(1,"chhavi");
        // map1.set(2,"rohit");
        // map1.set(3,"onion");
        // map1.set(4,"potato");
        // map1.set(4,"rose"); // key same = updates value of that key
        // map1.set(5,"flower");

        // map1.delete(2)

        // console.log(map1.has(5));

        // console.log(map1.size);

        // map1.clear()

        // console.log(map1);

    // another way to create map
    const map1 = new Map([ //2d array
        ["naam","chhavi"],
        ["age",19],
        ["clg","SAGE"],
        ["gender","female"],
    ]);
    // console.log(map1)


    
// iterate over map
    // for(let [key,value] of map1){
    //     console.log(key,value)
    // }
// another way
    // map1.forEach((value)=>console.log(value))