// Introduction to Arrays

// Creating arrays with square brackets[]
let fruits = ["apple", "banana", "orange", "grape"];
let number = [10, 25, 30, 45, 50];
let booleans = [true, false, true, true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray = [];

// Display the arrays
console.log("Fruits array:", fruits);
console.log("Numbers array:", number);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

console.log("");      // Empty line

// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", number.length);
console.log("Empty array length:", emptyArray.length);

console.log("");   // Empty line

// Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]);
console.log("Second fruits:", fruits[1]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("");      // Empty line

console.log("First number:", number[0]);
console.log("Second number:", number[1]);
console.log("Third number:", number[2]);
console.log("Fourth number:", number[3]);
console.log("Last number:", number[number.length - 1]);

// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]);

console.log("");      // Empty line

let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// changing existing elements
colors[0] = "purple";
colors[1] = "black"
colors[2] = "yellow";
console.log("After changes:", colors);

console.log("");      // Empty line

// Adding elements to the end with push()
let shoppingList = ["milk", "bread"];
console.log("Original list:", shoppingList);

shoppingList.push("eggs");
shoppingList.push("cheese", "butter");      // can add multiple items
console.log("After adding items", shoppingList);

console.log("");      // Empty line

// Removing the last element with pop()
let removedItem = shoppingList.pop();      // pop() returns the removed item
console.log("Removed item:", removedItem);
console.log("Final list:", shoppingList);

console.log("");      // Empty line

// Finding elements
let students = ["Alice", "Bob", "Charlie", "Diana"];
console.log("Students:", students);
console.log("Is Bob in class?", students.includes("Bob"));
console.log("Where is Charlie?", students.indexOf("Charlie"));
console.log("Where is Frank?", students.indexOf("Frank"));   // -1 means not found
console.log("Where is Frank?", students.includes("Frank"));

console.log("");      // Empty line

// More Array Methods

let numbers = [1, 2, 3, 4, 5];
let names = ["John", "Jane", "Bob", "Alice"];

console.log("Original numbers:", numbers);
console.log("Original names:", names);

console.log("");    // Empty line

// slice() - Get a portion of array (doesn't change original)
let firstThree = numbers.slice(0, 3);    // Get items 0, 1, 2
let lastTwo = numbers.slice(-2);         // Get last 2 items
console.log("First three numbers:", firstThree );
console.log("Last two numbers:", lastTwo);
console.log("original unchanged:", numbers);

console.log("")      // Empty Line

// splice() - Remove/add items at specific position (changes original)
let fruit = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original fruits:", fruits);

// Remove 2 items starting at index 1
let removed = fruits.splice(0, 2);
console.log("Removed items:", removed);
console.log("After removal:", fruits);

// Add items at index 1
fruit.splice(1, 0, "mango", "pineapple");   //Remove 0, add two items
console.log("After adding:", fruit)

console.log("");      // Empty line

// join() - convert array to string
let words = ["Hello", "from", "JavaScripts"];
let sentence = words.join(" ");      // Join with spaces
let csv = words.join(",");           // Join with commas
console.log("Words array:", words);
console.log("As sentence:", sentence);
console.log("As CSV:", csv);

console.log("");      // Empty line

// split() - Convert string to array (string method, but creates arrays)
let message = "apple,banana,orange";
let fruitArray = message.split(",");
console.log("String:", message);
console.log("Split into arrays:", fruitArray)

// reverse() - Reverse array order (changes original)
let countdown = [1, 2, 3, 4, 5];
console.log("Original countdown:", countdown);
countdown.reverse();
console.log("Reversed countdown:", countdown);

console.log("");      // Empty line

// Introducton to Loop
// Basic for loop structure:
// for (initialization; condition; increment) {
//     code to repeat
// }

// Simple counting loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i)
}

console.log("");      // Empty line

console.log("Counting from 5 to 1");
for (let i = 5; i >= 1; i--) {
    console.log("Count:", i)
}

console.log("Blast off!");

console.log("");      // Empty line

// Using loop with calculations
console.log("Multiplication table for 3:");
for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    console.log(`3 × ${i} = ${result}`);
}

console.log("");      // Empty line

// Loop with different step sizes
console.log("Even numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) { // i += 2 means i = i + 2
    console.log("Even number:", i);
}

console.log("");      // Empty line

// Loop through an array using index
let color = ["red", "green", "blue", "yellow"];
console.log("Colors in the array:");
for (let i = 0; i < color.length; i++) {
    console.log(`color ${i + 1}: ${color[i]}`);
}

console.log("");      // Empty line

// For....of Loop and Array Processing
// for...of loop - easier way to go through array items
let fruitt = ["apple", "banana", "orange", "grape"];

console.log("Using for...of loop:");
for (let fruit in fruitt) {
    console.log("I like", fruit);
}

console.log("");      // Empty line

// Compare with traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruitt.length; i++) {
    console.log("I like", fruitt[i])
}

console.log("");      // Empty line

// Processing numbers with for...of
let scores = [85, 92, 78, 96, 88];
let total = 0;

console.log("Calculating average score:");
for (let score of scores) {
    console.log("Adding scores:", score);
    total += score;   // Same as: total + score
}

let average = total / scores.length;
console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

console.log("");      // Empty line

// Building new arrays with loops
let numberss =[1, 2, 3, 4, 5];
let doubled = [];

console.log("Original:", numberss);
console.log("Doubled", doubled);

// While Loops

// While loop - repeats as long as condition is true
// while (condition) {
//     code to repeat
// }

console.log("Basic while loop - counting to 5:");
let count = 1
while (count <= 5) {
    console.log("Count is:", count);
    count ++  // IMPORTANT: Must change the condition variable!
}

console.log("");      // Empty line

// While loop processing array until condition met
let numberr = [2, 4, 6, 8, 3, 10, 12];
let i = 0;
let foundOdd = false;

console.log("Looking for first odd number:");
while (i < numberr.length && !foundOdd) {
    console.log(`Checking ${numberr[i]}...`);

    if (numberr[i] % 2 === 1) {   // check if odd
        console.log(`Found odd number: ${numbers[i]}`);
        foundOdd = true;
    }
}