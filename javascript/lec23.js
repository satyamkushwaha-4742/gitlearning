// Another way to iterate over Array
    // For Each Function - arr.forEach expect krta hai ek call back function or fir values ko ek ek krke bhejta hai 
    

    // arr.forEach(callbackfunc(1,2,3){})
        // arguments in call back function
        // 1st argument - number
        // 2nd arg - index
        // 3rd arg - array pass for modifying array values

        // EXAMPLE 1
            // let arr = [10,20,30,40,50]
            // with 1 argument
                    // arr.forEach(function(num){
                    //     console.log(num);
                    // })
                // another way
                    // arr.forEach(num =>console.log(num))

            // with 2 arguments
                // arr.forEach((num,index)=>{
                //     console.log(num,index)
                // })

            // with 3 arguments
                // arr.forEach((num,index,a)=>{
                //     a[index]=num+5
                // })
                // console.log(arr)
        
            // Clean Code
                // const print = function (num){
                //     console.log(num);
                // }
                // arr.forEach(print)