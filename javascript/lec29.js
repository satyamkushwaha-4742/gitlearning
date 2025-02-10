// DOM - Document Object Model

console.log("hello coders kaise ho")
// it is not visible on webpage it is visible on console(inspect)

// like i want when i click on a text it is manipulated (color or text anything) we need DOM to do that

// window>document>(shows full html file) - here only our html file can be modified through js

document.getElementById('first').innerHTML = "PADHAI PADHAI"
// h1 is changed

// html,css cant perform calculations,manipulations,etc thats why we need js and DOM
// DOM ----> Window(global object) => document(object inside window where html page is kept it is converted to a object and in js everything is around object) =>HTML page(object) => head & html(objects) => meta, meta name and title(inside head) & div(inside body) => text node(inside title) & h1,h2,ul(inside div) => text node and attribute

// to get properties inside document - console.dir(document)


// to get access to h1
document.getElementById('first')

// to store inside an obj
const obj =document.getElementById('first');

// then to display that but it doesnt shows like key value pair
obj

// when we check typeof(obj) - object 

// all properties get attached to obj to see - obj.__proto__
// obj.innerHTMl also present 

// obj.innerHTMl
// "Hello Coders" - as output

// obj.id
// "first" - as output

// obj.className (to prevent naming conflict) (not class here we have to use className to refer to that html element class as class keyword is reserved in js)
// "header1"

// class name can be modified like this
// obj.className = "header100" 

// to clear console if we have any error like Identified Obj - it reloads webpage without cache
// ctrl+shift+r



// Different ways to access any element
// by id - document.getElementById('first')
// by class - document.getElementByclassName('header1') - then it will show HTMLCollection as multiple elements
//  can have same class - it is like array(not exactly behaves like it) and also can be accessed obj[0] - it will show first element inside 
// HTMLCollection 

// to change in obj by class
// obj[0].style.backgroundColor = "pink"

// it also acts as object (key values of its properties)
// obj[0].style

// to get element tag name
// obj.tagName---> heading h1 de dega..