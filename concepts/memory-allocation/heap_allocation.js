console.log("Heap Allocation Example:");

// Basic case: Comparing two references to the same object
const person1 = { name: "John", age: 30 };
const person2 = person1; // person2 is a reference to the same object as person1

// Since person1 and person2 reference the same object, this will log true
console.log("Comparing heap objects:", person1 === person2);

// Edge case: Comparing null and undefined
const obj1 = null; // obj1 is explicitly set to null
const obj2 = undefined; // obj2 is explicitly set to undefined

// Since null and undefined are different types, this will log false
console.log("Comparing null and undefined:", obj1 === obj2);

// Edge case: Comparing circular references
const obj3 = {};
obj3.self = obj3; // obj3 has a circular reference to itself

const obj4 = {};
obj4.self = obj4; // obj4 has a circular reference to itself

// Even though obj3 and obj4 have the same structure, they are different objects in memory
// This will log false because obj3 and obj4 are not the same reference
console.log("Comparing circular references:", obj3 === obj4);

// Edge case: Comparing objects with the same structure but different references
const car1 = { make: "Toyota", model: "Camry" };
const car2 = { make: "Toyota", model: "Camry" };

// Even though car1 and car2 have the same structure and values, they are different objects in memory
// This will log false because car1 and car2 are not the same reference
console.log("Comparing objects with the same structure:", car1 === car2);

// Edge case: Comparing arrays with the same elements but different references
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

// Even though array1 and array2 have the same elements, they are different objects in memory
// This will log false because array1 and array2 are not the same reference
console.log("Comparing arrays with the same elements:", array1 === array2);

// Edge case: Comparing functions with the same implementation but different references
const func1 = function() { return "Hello"; };
const func2 = function() { return "Hello"; };

// Even though func1 and func2 have the same implementation, they are different objects in memory
// This will log false because func1 and func2 are not the same reference
console.log("Comparing functions with the same implementation:", func1 === func2);