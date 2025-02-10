// Dynamic Quote Generator
const motivationalQuotes = [
    "Dream big, work hard.",
    "Stay positive, work smart.",
    "Make it happen.",
    "You got this!",
    "Keep moving forward.",
    "Focus on the goal.",
    "Be your best self.",
    "Every day is a chance.",
    "Stay hungry, stay foolish.",
    "Never stop learning.",
    "Success starts today.",
    "Chase your dreams.",
    "Believe and achieve.",
    "Failure is a step forward.",
    "Your effort matters.",
    "Create your own luck.",
    "Small steps, big results.",
    "Rise and shine.",
    "Stay strong, stay determined.",
    "You are unstoppable."
];
  
function generateQuotes(){
const text = document.getElementById("quote")
// to randomise quotes index of the array
const index = Math.floor(Math.random()*motivationalQuotes.length);
text.textContent = motivationalQuotes[index];
}
setInterval(generateQuotes,2000)




// Function to generate a random RGB color
function getRandomColor() {
    // Generate random values for R, G, and B (between 0 and 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 
    // Return the RGB color in the format "rgb(r, g, b)"
    return `rgb(${r}, ${g}, ${b})`;
}
// Function to call the getRandomColor function to change the background color
function changeBackgroundColor() {
    const randomColor = getRandomColor(); // Generate a random RGB color
    document.body.style.backgroundColor = randomColor; // Set the background color
}
// Set the interval to change the background color every 5 seconds (5000 ms)
setInterval(changeBackgroundColor, 2000);