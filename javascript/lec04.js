// STRING IN JS
    
    // different ways to display string
    let str1 = "double quotes can be used to make a string";
    let str2 = 'single quotes can also be used';
    let str3 = `also backticks can be used which is most modern way of doing this`; 
    console.log(str1,str2);

        // backticks are very useful because it allows to use variables in strings using ${}
        let price = 100000;
        console.log(`the price of kachalu is ${price}`);
        // instead of
        console.log("price of tomato",price)

    // string concatenation
    let s1="chhavi"
    let s2= " is good"
    console.log(s1+s2)

    // string properties
        // length
            console.log(s2.length) //we dont use function or () to use length property else every property () is required
            // space is also counted as counter

        // print - "CHHAVI IS CODER" (as it is)
            console.log(`"CHHAVI IS CODER"`)
            // also we can use single quotes outer

        // next line
        let message = "coding badiya hoti hai. \npar bohot dimaag kharab krti hai"
        console.log(message)

        // escape character
        // print - coding badiya hoti hai. \npar bohot dimaag kharab krti hai (as it is)
        let msg = "coding badiya hoti hai. \\npar bohot dimaag kharab krti hai"
        console.log(msg)
        // we use \ to print \n in the string output it will not create next line
        // \ is used that it will not be printed but its next character will always be printed

        // to print only specific character from a string
        let naam = "Chhavi"
        console.log(naam[0])
        console.log(naam.charAt(3))

        // uppercase & lowercase
        console.log(naam.toUpperCase())
        console.log(naam.toLowerCase())
        // original string will not be changed

        // check index of a substring in a string
        let string1 = "aloo kachalu aloo kachalu"
        console.log(string1.indexOf("kachalu"))
        // it first checks if that substring is present or not then gives index of only first occurence and its first occurence index

        // to find last occurence first character index
        // if a substring is not present it returns -1
        console.log(string1.lastIndexOf("kachalu"))

        // to check if a substring is there in string it returns boolean value
        console.log(string1.includes("aloo"))

        // string slice
        //             -10-9-8-7-6-5-4-3-2-1
        //               01234567910
        let newstring = "don hu don";
        // both works same but slice can take negative index also
        // starting index should be before than ending even if one is negative and one is not else no output
        console.log(newstring.slice(-6,-1)) //it wil not include -1
        console.log(newstring.substring(0,6))

        // substr
        console.log(newstring.substr(0,3))
        // this crossed line is just a warning by vs code to use slice and substring function instead of this

        // replacing
        console.log(newstring.replace("don","chhavi"))
        // it only replaces first substring
        console.log(newstring.replaceAll("don","chhavi"))
        // it replaces all substring with new one

        // split
        let rhyme = "aloo! kachalu! bhalu! laalu"
        console.log(rhyme.split("! ")) //this is its delimiter
        // it splits where it see ! and make an array of all elements

        // trim
        let rhyming = "         aloo kachalu beta kaha gye the           "
        console.log(rhyming.trim())
        // it trims the spaces from starting and end
        console.log(rhyming.length)
        console.log(rhyming.trim().length)
    
    // New way to create a String
    let latest = new String("hello coders!!")
    console.log(latest)
    // it also shows type that it is string but actually its type when checked is object
    // because when we use new keyword to make this string its value is stored in heap
    // when we see it in console of chrome it shows all properties for that string