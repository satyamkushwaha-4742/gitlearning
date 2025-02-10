// DATE
    // to get current date & time- object type
    const d = new Date();
    // console.log(d);

// to get it in different readable format
    // console.log(d.toDateString());
    // console.log(d.toString());
    // console.log(d.toISOString())

    // where the date & time is coming from system clock when we change system time here also it will be changed
    // it originally calculates in millisecond and then converted to date,hours,etc
    // because it must be precised like in a ticket booking it is necessary for a person who booked first and it can be checked through milliseconds as many people can book at the same h,m,s but milliseconds is the best way to check who is first
    // it is calculated from 1970-01-01 00:00:00 if we put 1000 inside Date() which means 1000 milliseconds is 1 second it will give 1970-01-01 00:00:01

// these give output in number format
    // console.log(d.getDate())
    // console.log(d.getDay()) // sun to sat = 0,1,2,3,4,5,6
    // console.log(d.getMonth()) // jan to dec = 0 to 11
    // console.log(d.getTime()) //it is the milliseconds which is used to convert it to date time

// another way to get date
    // const now = Date.now()
    // console.log(now) //also in milliseconds





// to put date & time of own
    // const d0 = new Date("2022-01-20T10:24:32") //string month will be normal way 1 based
    // console.log(d0.toString())

    // const d1 = new Date(2022,5,10) //here in number month will be zero based 5 means june that is 6 in real life
    // console.log(d1)

    // const d2 = new Date(2022,5,10,7,34,9,230) //y-m-d-hr-min-sec-millisec
    // console.log(d2.toString())







// set date components
    // d.setDate(16)
    // d.setFullYear(2005)
    // d.setMonth(4)
    // console.log(d.toString())





    
// Date Calculations
    const d1 = new Date()
    const d2 = new Date("2024-05-16")
    console.log(d1-d2) //in milliseconds
    console.log(d1>d2) //true

// countdown timer for a specific day in future - olympics
    // days,hours,min,sec
    const current_date = new Date()
    const future_date = new Date ("2028-07-14T00:00:00");
    const date = (future_date-current_date); // in milliseconds
    const days = Math.ceil(date/(1000*60*60*24))
    const hours = Math.ceil(date/(1000*60*60)%24)
    const min = Math.ceil(date/(1000*60)%60)
    const sec = Math.ceil(date/(1000)%60)
    console.log(`Olympic Countdown Time : Days : ${days}, Hours : ${hours}, Mins : ${min}, Secs : ${sec}`)