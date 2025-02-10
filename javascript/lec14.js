let age = 50;

// if-else 
if(age>=18){ //true
    console.log("eligible for vote")
}
else{
    console.log("not eligible for vote")
}

// if-else if-else 
if(age<18){
    console.log("kid")
}
else if(age>45){
    console.log("old")
}
else{
    console.log("young")
}

// Switch - multiple conditions for same variable
let num = 6;
switch(num){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");            
        break;      
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("not a valid day")
}
// in switch case there is strict comparison(===) means string will be compared to string then default will be run like if day = "0" 
