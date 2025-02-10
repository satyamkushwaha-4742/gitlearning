// Function to update the countdown
function updateCountdown() {
    const olympicsDate = new Date('July 14, 2028 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = olympicsDate - now;
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    // Update the HTML content
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
  
  // Call the function every second
  const countdownInterval =  setInterval(updateCountdown, 1000);
  