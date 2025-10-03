// Function declaration - creating the function
function sayHello() {
    console.log("Hello from my first function!");
}

// Function call - using the function
sayHello();

// You can call it multiple times
sayHello();
sayHello();

console.log("");   // Empty line

// Another simple function
function showCurrentTime() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}

// Call the time function
showCurrentTime();

console.log("");   // Empty line

// Function with one parsmeter
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to Javascript!`);
}

// Call with diffrent values
greetPerson("Alice");
greetPerson("Bob");
greetPerson("Charlie");

console.log("");   // Empty line