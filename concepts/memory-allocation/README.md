# Memory Allocation in Disk

## Overview

Memory allocation plays a critical role in how objects are stored and managed in memory. This section explores how memory allocation influences object identity and the application of the Value Object Pattern.

### Key Concepts

- **Memory Management:** How and where objects are stored in memory, and how this affects their identity.
- **Heap vs. Stack:** Understanding where objects are allocated can influence whether their identity or attributes are used for comparison.

### Influence on Object Identity

- **Heap Allocation:** Objects allocated on the heap have a unique memory address, reinforcing the concept of Object Identity.
- **Stack Allocation:** Objects on the stack are often temporary and may not have a persistent identity, making them more suitable for value-based comparison.

## Examples

- [Heap Allocation](heap_allocation.js): Demonstrates how objects allocated on the heap have unique memory addresses.
    
    ```sh
    node concepts/memory-allocation/heap_allocation.js
    ```

    Explanation

    - Basic Case: Demonstrates that two variables referencing the same object in memory will be considered equal.
    - Edge Case (Null and Undefined): Shows that null and undefined are different types and thus not equal.
    - Edge Case (Circular References): Illustrates that even if two objects have the same structure and circular references, they are not the same object in memory and thus not equal.
    - Edge Case (Same Structure, Different References): Demonstrates that objects with the same structure and values are not equal if they are different objects in memory.
    - Edge Case (Arrays with Same Elements): Shows that arrays with the same elements are not equal if they are different objects in memory.
    - Edge Case (Functions with Same Implementation): Illustrates that functions with the same implementation are not equal if they are different objects in memory.


- [Stack Allocation](stack_allocation.js): Shows how objects allocated on the stack may not have a persistent identity.
    
    ```sh
    node concepts/memory-allocation/stack_allocation.js
    ```

    Explanation
    
    - Basic Case: Demonstrates that two primitive numbers with the same value are considered equal.
    - Edge Case (NaN): Shows that NaN is not equal to anything, including itself.
    - Edge Case (Negative Zero): Illustrates that in JavaScript, -0 is considered equal to 0.
    - Edge Case (Different Primitive Types): Compares a string and a number with the same value, showing they are not equal.
    - Edge Case (Boolean Values): Compares boolean values, showing that true is equal to true, but true is not equal to false.
    - Edge Case (Undefined and Null): Compares undefined and null, showing they are different types and not equal.
    - Edge Case (Infinity Values): Compares positive and negative Infinity values, showing that two positive Infinity values are equal, but positive and negative Infinity values are not equal.

- [Value Object](value_object.js): Illustrates how the Value Object Pattern can be applied to objects allocated on the stack.
    
    ```sh
    node concepts/memory-allocation/value_object.js
    ```

    Explanation


    - Basic Case: Demonstrates that two User objects with the same properties are considered equal.
    - Edge Case (Null and Undefined): Shows that null and undefined are different types and thus not equal.
    - Edge Case (Circular References): Illustrates that even if two objects have circular references, they are considered equal if their properties match.
    - Edge Case (Different Properties): Demonstrates that User objects with different properties are not equal.
    - Edge Case (Comparing with a Non-User Object): Shows that comparing a User object with a non-User object will result in false.
    - Edge Case (Comparing with Null): Illustrates that comparing a User object with null will result in false.
    - Edge Case (Comparing with Undefined): Demonstrates that comparing a User object with undefined will result in false.


### Relation to Value Object Pattern

Understanding memory allocation helps explain why certain objects are better suited to the Value Object Pattern, particularly when immutability and equality by attributes are required.

After exploring this section, proceed to the [Value Object Pattern](../value-object/README.md) to see how these concepts come together.