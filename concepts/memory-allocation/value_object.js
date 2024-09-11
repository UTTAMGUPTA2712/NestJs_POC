console.log("Value Object Example:");

// Define a User class that represents a value object
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // Method to compare two User objects based on their properties
    equals(other) {
        if(!other || !(other instanceof User)) return false;
        return this.id === other.id && this.name === other.name;
    }
}

// Basic case: Comparing two User objects with the same properties
const user1 = new User(1, "Alice");
const user2 = new User(1, "Alice");

// Since user1 and user2 have the same id and name, this will log true
console.log("Comparing value objects:", user1.equals(user2));

// Edge case: Null and undefined
const user3 = null;
const user4 = undefined;

// Since null and undefined are different types, this will log false
console.log("Comparing null and undefined:", user3 === user4);

// Edge case: Circular references
const user5 = new User(1, "Alice");
user5.self = user5; // user5 has a circular reference to itself

const user6 = new User(1, "Alice");
user6.self = user6; // user6 has a circular reference to itself

// Even though user5 and user6 have the same structure and circular references,
// the equals method only compares id and name, so this will log true
console.log("Comparing circular references:", user5.equals(user6));

// Edge case: Different properties
const user7 = new User(2, "Bob");

// Since user1 and user7 have different id and name, this will log false
console.log("Comparing different properties:", user1.equals(user7));

// Edge case: Comparing with a non-User object
const nonUser = { id: 1, name: "Alice" };

// Since nonUser is not an instance of User, the equals method will not be called
// This will log false because user1 and nonUser are different types
console.log("Comparing with a non-User object:", user1.equals(nonUser));

// Edge case: Comparing with null
// This will log false because user1 is a User object and user3 is null
console.log("Comparing with null:", user1.equals(user3));

// Edge case: Comparing with undefined
// This will log false because user1 is a User object and user4 is undefined
console.log("Comparing with undefined:", user1.equals(user4));