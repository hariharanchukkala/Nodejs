const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const calculator = (a, b) => {
  console.log("Addition:", add(a, b));
  console.log("Subtraction:", subtract(a, b));
  console.log("Multiplication:", multiply(a, b));
  console.log("Division:", divide(a, b));
};
calculator(10, 5);
