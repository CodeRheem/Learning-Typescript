// Create variables for your profile with proper types:
// - Your full name (string)
// - Your age (number)
// - Are you employed? (boolean)
// - List of 3 programming languages you know (array of strings)
// - Years of experience (number)

let myName: string = "John";
let myAge: number = 30;
let isEmployed: boolean = false;
let skills: string[] = ["JavaScript", "TypeScript", "React"];
let yearsOfExperience: number = 4;

function introduce(name: string, age: number, employed: boolean, skills: string[], yearsOfExperience: number): string {
    return `My name is ${name}, I am ${age} years old and I am ${employed ? "employed" : "unemployed"}. I have ${yearsOfExperience} years of experience and my skills include ${skills.join(", ")}.`;
}

console.log(introduce(myName, myAge, isEmployed, skills, yearsOfExperience));


// Create these functions with proper type annotations:
// 1. multiply(a, b) - multiplies two numbers
// 2. divide(a, b) - divides two numbers
// 3. getFullName(firstName, lastName) - returns full name
// 4. isAdult(age) - returns true if age >= 18

function multiplication(a: number, b: number): number{
    return a * b
}

function division(a: number, b: number): number{
    return a/b
}

function getFullName(firstName: string, lastName: string): string{
    return `${firstName} ${lastName}`
}

function isAdult(age: number): boolean{
    return age >= 18
}
console.log(multiplication(5, 10));
console.log(division(10, 2));
console.log(getFullName("John", "Doe"));
console.log(isAdult(20));

// Create a function called calculateGrade that:
// - Takes a score (number) as parameter
// - Returns a string: "A" for 90+, "B" for 80-89, "C" for 70-79, "F" for below 70
// - Has proper type annotations for parameter and return type

function calculateGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}