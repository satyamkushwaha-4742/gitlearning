// normally
// function names(naame){
//     console.log("hello i am",naam)
// }
// function greet(){
//     console.log("call back function")
// }
// names("chhavi"); 


// call back function
// only reference of greet will be shared to names as an argument
// 1 function ko as an argument dusre function ko bhejna
function names(naam){
    console.log("hello i am")
    naam()
}
// names(greet);

// also we can call like
    // names(function greet(){
    //     console.log("call back function")
    // })

// also like this 
    // const greet = function greet(){
    //     console.log("call back function")
    // }
    // names(greet)

// also like this
    // names(()=>{
    //     console.log("call back function");
    // })

    

// but what is the real world use case
    function fetchData(){
        console.log("i am fetching data")
    }
    // har 5sec me data fetch ho rha h
    // we want ki ye backend se data laaye or frontend me har 5sec me dikhata rhe

    setInterval(fetchData,1000)
    // here value is in millisecond

    // boht use case hai ye ek example tha function ke andar as an argument dusre function ko bheja 