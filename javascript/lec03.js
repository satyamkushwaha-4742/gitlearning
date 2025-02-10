// Type Conversion
// in terminal yellow defines number,boolean and if not yellow it is string, if it is grey it means and displays as undefined

        // convert string to number
        let acc_bal = "10" 
        console.log(typeof acc_bal)
        let num= Number(acc_bal)+50
        console.log(typeof num)
        console.log(num)

        // convert string (with number and char) to number
        let a = "100jkas"
        console.log(Number(a))
        // NaN - Not a Number

        //convert bool to number
        let bo = true
        console.log(Number(bo))
        // it says 1 for true 0 for false
    
        // convert null to number
        let b = null;
        console.log(Number(b))
        // it says 0 bcz nothing is there 

        // convert Undefined to number
        let c
        console.log(Number(c))
        // NaN

        // convert number to string
        let d = 10
        console.log(String(d))

        // convert bool to string
        let e = true
        console.log(e)
        console.log(String(e))
        // now it is "true"

        // convert null to string
        let n=null
        console.log(String(n)) //it makes it "null" as a string
        
        // convert undefined to string
        let u
        console.log(String(u)) //makes it "undefined"

        // convert string to boolean
        // if string is empty - false, if anything inside string - true
        // " " (space is a character it has an ASCII value), "asdhf" - true 
        // "" - false