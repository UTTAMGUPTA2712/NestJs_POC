console.log("Stack Allocation Example:");

// Basic case: Comparing two primitive numbers
const num1 = 10;
const num2 = 10;

// Since num1 and num2 are primitive values and have the same value, this will log true
console.log("Comparing stack objects:", num1 === num2);

// Edge case: Comparing NaN values
const nan1 = NaN;
const nan2 = NaN;

// NaN is not equal to anything, including itself, so this will log false
console.log("Comparing NaN values:", nan1 === nan2);

// Edge case: Comparing negative zero values
const negZero1 = -0;
const negZero2 = -0;

// In JavaScript, -0 is considered equal to 0, so this will log true
console.log("Comparing negative zero values:", negZero1 === negZero2);

// Edge case: Comparing different primitive types
const str1 = "10";
const num3 = 10;

// A string and a number with the same value are not equal, so this will log false
console.log("Comparing different primitive types (string and number):", str1 === num3);

// Edge case: Comparing boolean values
const bool1 = true;
const bool2 = true;
const bool3 = false;

// Two true values are equal, so this will log true
console.log("Comparing boolean values (true and true):", bool1 === bool2);

// A true and a false value are not equal, so this will log false
console.log("Comparing boolean values (true and false):", bool1 === bool3);

// Edge case: Comparing undefined and null
const undef = undefined;
const nullVal = null;

// Undefined and null are different types, so this will log false
console.log("Comparing undefined and null:", undef === nullVal);

// Edge case: Comparing Infinity values
const inf1 = Infinity;
const inf2 = Infinity;
const inf3 = -Infinity;

// Two positive Infinity values are equal, so this will log true
console.log("Comparing Infinity values (Infinity and Infinity):", inf1 === inf2);

// Positive and negative Infinity values are not equal, so this will log false
console.log("Comparing Infinity values (Infinity and -Infinity):", inf1 === inf3);