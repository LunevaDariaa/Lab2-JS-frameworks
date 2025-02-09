export function welcomeMessage(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to Georgian@Ilac College`);
}

export function convertTemperature(celsius) {
  return (celsius * 9) / 5 + 32; // Celsius to Fahrenheit
}

export function calculateFactorial(num) {
  if (num < 0) return "Factorial of a negative number doesn't exist";
  if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

export function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
