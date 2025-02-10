// Accessing elements by css selectors - query selector
// query selector allows both id and class 

    // id
    // const id = document.querySelector("#first");
    // id.innerHTML="Learning JS";

    // in class it only selects the first element with that selector
        // const id2 = document.querySelector(".header1");
        // id2.style.backgroundColor = "aqua";

    // and if we want to select all elements with that class
        // const obj = document.querySelectorAll(".header1");

    // to iterate over node list--
        // for loop
            // for(i=0;i<obj.length;i++){
            //     obj[i].style.backgroundColor="slateblue";
            // }
        // for of loop
            // for(let val of obj){
            //     console.log(val)
            // }
        // for each 
            // obj.forEach((val)=>{
            // console.log(val)
            // })




    // using tag
        // let obj2 = document.querySelectorAll("ul li")

    // converting NodeList to array
        // Array.from(obj)

// Accessing by Tag Name
    // let obj1 = document.getElementsByTagName("h1")
    // returns all elements with the tag as html collection
    // then can be accessed using for loop, for of loop
    // for each -> can be used after converting it to array




// Accessing using Relationships

// parent nodes, child nodes, first and last child ,siblings node
let obj2 = document.querySelector("h1")
// console.log(obj2.parentNode);
// .parentElement - it doesnt include text node (space is also considered text node)


//parent and child 
// .children - only gives element nodes only html collection
// but parentNode or childNode includes text node




// firstChild - node firstElementChild - element (same for last)

console.log(obj2.nextElementSibling); //return h2
console.log(obj2.nextSibling); //returns text - space
// same for previous sibling



// innerHTML, textContent, innerText - difference
// if a strong tag or any other tag is added in the selected element by id or class then
// innerHTML - returns the strong tag also sab kuch dikha dega 
// textContent - just the text hide ka bhi dikha dega 
// innerText - just text jo bas scren par 

// if we have to add style>display:none to strong tag then
// innerHTML - style part is also visible
// textContent - just the text
// innerText - only the text before strong