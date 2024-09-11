# Value Object Pattern

## Overview

The Value Object Pattern is used in scenarios where an object's identity is determined by the values of its attributes rather than a unique identifier. This pattern is particularly useful for objects that are immutable, meaning their state cannot change after they are created.

### Key Concepts

- **Equality by Attributes:** Unlike traditional objects, which are compared by their identity (i.e., their reference in memory), value objects are compared based on the values of their attributes.
- **Immutability:** Value objects are often immutable, ensuring that their state cannot change after they are instantiated.

### Example

Consider an `Address` class. If two addresses have the same street, city, state, and zip code, they are considered equal, even if they are different objects in memory.

```csharp
class Address {
    string street;
    string city;
    string state;
    string zipCode;

    // Implementation of equality based on attributes
}
```

### When to Use

- **When objects represent simple entities with no conceptual identity.**
- **In scenarios where object comparison should be based on attribute values.**

Explore more in the [Object Identity](../object-identity/README.md) section to understand the contrast between identity and value-based equality.
