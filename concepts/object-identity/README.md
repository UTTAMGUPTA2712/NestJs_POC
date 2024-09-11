# Object Identity

## Overview

Object Identity is a concept that defines how objects are uniquely identified within a system. Each object is assigned an internal identifier (OID), which distinguishes it from all other objects, even those with identical attributes.

### Key Concepts

- **Unique Identifier (Not Always Explicit):** While Node.js doesn't explicitly assign an "Object ID" (OID), objects reside in memory at unique locations, serving as a de facto identifier.
- **Comparison by Identity:** When comparing references (variables) to objects, equality (===) indicates they point to the same object in memory (same identity), even if their properties hold identical values.


### Importance

Understanding object identity is vital for tasks like:

- Managing Unique Entities: When dealing with data representing unique entities (e.g., database records, user objects), object identity ensures you're working with the correct instance.
- Object Immutability: If you require objects to remain unchanged after creation (immutable objects), understanding identity helps maintain their integrity.
- Deep vs. Shallow Comparison: When comparing objects with nested structures, object identity helps differentiate between comparing object references (===) and comparing property values recursively (deep comparison).

### Example
    
1. Basic Identity Comparison

    ```javascript
    const obj1 = { name: 'Alice' };
    const obj2 = { name: 'Alice' };
    const obj3 = {...obj1};
    const obj4 = obj1;

    console.log(obj1 === obj2); // false
    console.log(obj1 === obj3); // true
    console.log(obj1 === obj4); // true
    ```

    Explanation

    - `obj1` and `obj2` are two distinct objects in memory, even though they have identical properties.
    - `obj3` points to the same object as `obj1`, so they are considered equal.

2. Identity in Arrays

    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = [...arr1];
    const arr4 = arr1;

    console.log(arr1 === arr2); // false
    console.log(arr1 === arr3); // true
    console.log(arr1 === arr4); // true
    ```

    Explanation
    
    - Arrays are objects in JavaScript, so the same rules apply for identity comparison.
    - `arr1` and `arr2` are distinct arrays in memory, even though they have the same elements.

3. Identity in Functions

    ```javascript
    const fn1 = () => {};
    const fn2 = () => {};
    const fn3 = fn1;

    console.log(fn1 === fn2); // false
    console.log(fn1 === fn3); // true
    ```

    Explanation

    - Functions are objects in JavaScript, so the same rules apply for identity comparison.
    - `fn1` and `fn2` are distinct functions in memory, even though they have the same implementation.

## Exmaple

```sh
    node concepts/object-identity/object_identity.js
```

Explanation
Object Identity Examples:

obj1 and obj2 have the same structure and values but are different objects in memory.
obj3 is a shallow copy of obj1, so they are different objects in memory.
obj4 is a reference to the same object as obj1, so they are the same in memory.
Array Identity Examples:

arr1 and arr2 have the same elements but are different arrays in memory.
arr3 is a shallow copy of arr1, so they are different arrays in memory.
arr4 is a reference to the same array as arr1, so they are the same in memory.
Function Identity Examples:

fn1 and fn2 have the same implementation but are different functions in memory.
fn3 is a reference to the same function as fn1, so they are the same in memory.
Edge Case (Nested Objects):

nestedObj1 and nestedObj2 have the same structure and values but are different objects in memory.
nestedObj3 is a shallow copy of nestedObj1, so they are different objects in memory.
nestedObj4 is a reference to the same object as nestedObj1, so they are the same in memory.
Edge Case (Nested Arrays):

nestedArr1 and nestedArr2 have the same elements but are different arrays in memory.
nestedArr3 is a shallow copy of nestedArr1, so they are different arrays in memory.
nestedArr4 is a reference to the same array as nestedArr1, so they are the same in memory.
Edge Case (Functions with Different Implementations):

fn4 and fn5 have the same implementation but are different functions in memory.

### Contrast with Value Object Pattern

While Object Identity relies on a unique identifier, the Value Object Pattern compares objects based on their attributes. This section serves as a foundation for understanding why and when to use the Value Object Pattern.

For insights on how memory allocation affects object identity, proceed to [Memory Allocation in Disk](../memory-allocation-in-disk/README.md).
