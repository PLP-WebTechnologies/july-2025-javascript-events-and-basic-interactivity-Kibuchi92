// Part 2: JavaScript Functions - demonstrating scope, parameters, return values

// Function to calculate sum of integers from start to end (inclusive)
// Shows parameter use and return value
function calculateSum(start, end) {
  let sum = 0; // local variable – scoped to this function
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum; // returns computed sum to caller
}

// Global variable (scope: entire script)
const resultPara = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
  // Call function with parameters, capture return value
  const total = calculateSum(1, 5);
  // Update page with result
  resultPara.textContent = `Sum from 1 to 5 is: ${total}`;
});

// Part 3: JavaScript triggers CSS animation by adding and removing class

const animateBtn = document.getElementById('animateBtn');
const animBox = document.querySelector('.anim-box');

animateBtn.addEventListener('click', () => {
  // Add class to trigger CSS animation
  animBox.classList.add('animate');
  
  // Remove class after animation duration, allowing retriggering
  setTimeout(() => {
    animBox.classList.remove('animate');
  }, 600);
});
