// Typewriter Effect (Fixed - no duplicate text)
const text = "Kartik Swami";
let i = 0;
const speed = 150;
const element = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i+1); // Overwrites instead of appending
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start animation when page loads
window.onload = function() {
  typeWriter();
  
  // Initialize particles
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log("Particles loaded!");
  });
};