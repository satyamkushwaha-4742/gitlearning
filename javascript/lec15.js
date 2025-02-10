// loop - ek hi kaam baar baar krna ho
// For Loop
    // for(let i = 1;i<=10;i++){
    //     console.log(i)
    // }

    // sum of first n number
        // let sum = 0;
        // for(let i =1;i<=20;i++){
        //     sum+=i;
        // }
        // console.log(sum)

    // nested loop - loop ke andar loop
    // for(let j = 1;j<=6;j++){    
    //     for(let i = 1;i<=5;i++){
    //         console.log(i)
    //     }
    // }






    // if we want to print like 
    // 12345
    // 12345
    // 12345
    // 12345
    // 12345
    // answer:
    // for (let j = 1; j <= 5; j++) {    
    //     for (let i = 1; i <= 5; i++) {
    //         process.stdout.write(i.toString()); // Print without newline
    //     }
    //     console.log(); // Add a newline after each row
    // }






    // another way
    // for (let j = 1; j <= 5; j++) {
    //     let row = ""; // Initialize an empty string for each row
    //     for (let i = 1; i <= 5; i++) {
    //         row += i; // Append each number to the string
    //     }
    //     console.log(row); // Print the entire row at once    
    // }






    // accessing array using loop
    // let arr = [1,2,3,4]
    // for(let i = 0;i<arr.length;i++){
    //     console.log(arr[i])
    // }




    // accessing object using loop
    // let obj = {
    //     name:"chhavi",
    //     age:19,
    //     semester:5,
    //     degree:"BCA"
    // }
    // const key = Object.keys(obj);//yaha par value bhi nikal kar print kar sakte hai object.values(obj)-> value dega 
//kahi store kar print kara lenge ham key aur value ko 



    // for(let i = 0;i<key.length;i++){
    //     console.log(obj[key[i]])
    // }
    // shortcut for this - for in loop






// IMP - c++ fast isliye hai kuki baaki languages me yaha i ke liye har baar new space allocation hota hai prr c++ me nahi 




// While Loop
    // let i = 1;
    // while(i<=6){
    //     console.log(i);
    //     i++;
    // }

// Do While Loop
    // let i = 1;
    // do{
    //     console.log(i)
    //     i++
    // }while(i<=5)