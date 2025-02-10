

function timing(){

const timer=document.getElementById('timer');
//time.innerHTML="hello coder army";
//issese ham update karte hai kisi bhi time ko dikha sakte hai vaha par black screen show preview me function timing(){;
const now = new Date();
const IndianTime = now.toLocaleTimeString()
timer.innerHTML = IndianTime;
}

// styling
 timer.style.backgroundColor="tomato"
timer.style.fontSize = '200px';
timer.style.display = 'flex';
timer.style.height = "754px"
timer.style.justifyContent = 'center';
timer.style.alignItems = 'center';

setInterval(timing,1000);