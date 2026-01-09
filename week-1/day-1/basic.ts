// In JavaScript, you'd write:
// let name = "John";

// In TypeScript, you explicitly declare types:
let personName: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// TypeScript will catch errors:
// age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Arrays
let hobbies: string[] = ["coding", "reading", "gaming"];
let numbers: number[] = [1, 2, 3, 4, 5];

// Functions with typed parameters and return types
function greet(personName: string): string {
    return `Hello, ${personName}!`;
}

function add(a: number, b: number): number {
    return a + b;
}

// Call the functions
console.log(greet(personName));
console.log(add(10, 20));