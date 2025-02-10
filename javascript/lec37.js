
//body par click karne par kuch ho to hamne body opar hi click kar diya n ki koisi element par yaha par 
//acccess to body mil gya hai 
document.body.addEventListener("click", (event)=>{
  
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent="Hi";
    // kisi bhi position par click karne par kam ho jaye .
    const x = event.clientX;
    const y = event.clientY;
  
    circle.style.left = `${x-25}px`
    circle.style.top= `${y-25}px`
  
  
    const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    //last me append kar rahe hai 
    document.body.appendChild(circle);
  //5s ke badd remove bhi kar dena hai yaha par -
    setTimeout(()=>{
      circle.remove();
    } ,5000)
  })