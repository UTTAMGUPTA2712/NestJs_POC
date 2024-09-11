// Object identity examples
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
const obj3 = { ...obj1 }; // Spread operator creates a shallow copy of obj1
const obj4 = obj1; // obj4 is a reference to the same object as obj1

// obj1 and obj2 have the same structure and values, but they are different objects in memory
console.log("Comparing obj1 and obj2:", obj1 === obj2); // false

// obj1 and obj3 have the same structure and values, but obj3 is a shallow copy, so they are different objects in memory
console.log("Comparing obj1 and obj3:", obj1 === obj3); // false

// obj1 and obj4 are references to the same object in memory
console.log("Comparing obj1 and obj4:", obj1 === obj4); // true

// Array identity examples
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [...arr1]; // Spread operator creates a shallow copy of arr1
const arr4 = arr1; // arr4 is a reference to the same array as arr1

// arr1 and arr2 have the same elements, but they are different arrays in memory
console.log("Comparing arr1 and arr2:", arr1 === arr2); // false

// arr1 and arr3 have the same elements, but arr3 is a shallow copy, so they are different arrays in memory
console.log("Comparing arr1 and arr3:", arr1 === arr3); // false

// arr1 and arr4 are references to the same array in memory
console.log("Comparing arr1 and arr4:", arr1 === arr4); // true

// Function identity examples
const fn1 = () => { };
const fn2 = () => { };
const fn3 = fn1; // fn3 is a reference to the same function as fn1

// fn1 and fn2 have the same implementation, but they are different functions in memory
console.log("Comparing fn1 and fn2:", fn1 === fn2); // false

// fn1 and fn3 are references to the same function in memory
console.log("Comparing fn1 and fn3:", fn1 === fn3); // true

// Edge case: Comparing objects with nested structures
const nestedObj1 = { name: 'Alice', address: { city: 'Wonderland' } };
const nestedObj2 = { name: 'Alice', address: { city: 'Wonderland' } };
const nestedObj3 = { ...nestedObj1 };
const nestedObj4 = nestedObj1;

// nestedObj1 and nestedObj2 have the same structure and values, but they are different objects in memory
console.log("Comparing nestedObj1 and nestedObj2:", nestedObj1 === nestedObj2); // false

// nestedObj1 and nestedObj3 have the same structure and values, but nestedObj3 is a shallow copy, so they are different objects in memory
console.log("Comparing nestedObj1 and nestedObj3:", nestedObj1 === nestedObj3); // false

// nestedObj1 and nestedObj4 are references to the same object in memory
console.log("Comparing nestedObj1 and nestedObj4:", nestedObj1 === nestedObj4); // true

// Edge case: Comparing arrays with nested structures
const nestedArr1 = [1, [2, 3]];
const nestedArr2 = [1, [2, 3]];
const nestedArr3 = [...nestedArr1];
const nestedArr4 = nestedArr1;

// nestedArr1 and nestedArr2 have the same elements, but they are different arrays in memory
console.log("Comparing nestedArr1 and nestedArr2:", nestedArr1 === nestedArr2); // false

// nestedArr1 and nestedArr3 have the same elements, but nestedArr3 is a shallow copy, so they are different arrays in memory
console.log("Comparing nestedArr1 and nestedArr3:", nestedArr1 === nestedArr3); // false

// nestedArr1 and nestedArr4 are references to the same array in memory
console.log("Comparing nestedArr1 and nestedArr4:", nestedArr1 === nestedArr4); // true

// Edge case: Comparing functions with different implementations
const fn4 = () => { return "Hello"; };
const fn5 = () => { return "Hello"; };

// fn4 and fn5 have the same implementation, but they are different functions in memory
console.log("Comparing fn4 and fn5:", fn4 === fn5); // false