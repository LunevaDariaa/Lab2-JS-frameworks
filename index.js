import {
  welcomeMessage,
  convertTemperature,
  calculateFactorial,
  generateRandomHexColor,
} from "./functions.js";

// Calling functions
welcomeMessage("dear", "friend");

console.log(`15°C in Fahrenheit is: ${convertTemperature(15)}`);

console.log(`Factorial of 3 is: ${calculateFactorial(3)}`);

console.log(`Generated Hex Color: ${generateRandomHexColor()}`);
