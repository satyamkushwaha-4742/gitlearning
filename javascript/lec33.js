// Create a element - we want to add a new list element named dev

    // const element = document.createElement('li');
    // element.innerHTML = "DEV"

    // Attach to DOM ab kar rahe hai yaha par 
    //:::::::
    // const parent = document.getElementById("root"); //get access of parent element
    // parent.appendChild(element); //attached at last




    // we can also make a function for this
    // function attach(content){
        // creating element
        // const element = document.createElement('li');
        // element.innerHTML = content;

        // accessing parent element
        // const parent = document.getElementById("root");

        // appenChild - add one element at last 
        // parent.appendChild(element);

        // append - add multiple elements 
        // const element2 = document.createElement('li');
        // element2.innerHTML = content+" seekh gaye";
        // parent.append(element,"Hello World")
        // parent.append(element2);
    // }
    // attach("DEV");
    // attach("Aptitude");
    // attach("Blockchain");




// Create a text node - no tag element present
    // const txt = document.createTextNode("MERN");
    // const parent = document.getElementById("root");
    // parent.append(txt);







// Create a attribute node - class & id or any other
    // const element = document.createAttribute("id");
    // element.value = "first";
    // // access to first li taki attach ar sake ..
    // const curr_list = document.querySelector("li")
    // curr_list.setAttributeNode(element)




    // // access to second li
    // const parent = document.getElementById("root");
    // parent.children[1].setAttributeNode(element)




// access attribute of a element
//********* */
    // const element = document.getElementById("root")
    // console.log(element.getAttribute("class"))
    // element.setAttribute("course","bca") //create attribute
    // element.setAttribute("class","ordered") //change attribute
    // element.removeAttribute("course")





// add nodes to the DOM - using append, prepend
//************ */
    // const parent = document.getElementById("root")

    // const element = document.createElement('li');
    // element.innerHTML ="JS";

    // parent.prepend(element)
    // parent.append(element)

// add nodes to DOM - using insert before   

    // parent access
    // const parent = document.getElementById("root")

    // create element which needs to be added
    // const element = document.createElement('li');
    // element.innerHTML ="MERN";

    // child access which we want to insert before
    // const child2 = parent.children[1]

    // and perform the insertion
    // parent.insertBefore(element,child2)
  
    

// replace child
    // parent.replaceChild(element,child2)

// replace child using innerHTML
    // const parent = document.getElementById("root")
    // parent.innerHTML="<li>CARTOON</li>" //it will debug this as list at last 
    // parent.innerHTML+="<li>NETWORK</li>"



// insertAdjacentElement() - to insert dom element in different positions -> beforebegin, afterbegin,beforeend, afterend
    // const parent = document.getElementById("root");
    // const element = document.createElement('div');
    // element.innerHTML = "hello coders" //we want this to be appeared before ul
    // parent.insertAdjacentElement("beforebegin",element) //ul se pehle
    // parent.insertAdjacentElement("afterend",element) //ul k baad
    // parent.insertAdjacentElement("afterbegin",element) //ul ka first child
    // parent.insertAdjacentElement("beforeend",element) //ul ka last child






// insertAdjacentHTML() - same work but with string not a dom element







// delete node or element
    // document.querySelector('li').remove();





    
// removeChild(node)
    // const parent = document.getElementById("root");
    // const child = document.querySelector("li")
    // parent.removeChild(child)
