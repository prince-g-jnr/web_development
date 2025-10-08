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

// Function with multiple parameters
function introduce(firstName, lastName, age) {
    console.log(`Hi! I'm ${firstName} ${lastName} and I'm ${age} year old.`);
}

// Call with multiple arguments
introduce("Jane", "Smith", 25);
introduce("John", "Doe", 25);
introduce("Sarah", "Johnson", 22);

console.log("");

// Function with default parameter
function greetWithDefault(name = "Friend") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault("Maria");
greetWithDefault();

console.log("");

// Function that returns a calculated value
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Store the returned value in a variable
let sum = addNumbers(5, 3);
console.log("Sum:", sum);

// Use the returned value directly
console.log("10 + 7 =", addNumbers(10, 7));

console.log("");

// Function that returns processed text
function createFullName(first, last) {
    return `${first} ${last}`.trim();
}

let fullName = createFullName("John", "Doe");
console.log("Full name:", fullName)

console.log("");

// Function that returns a boolean
function isAdult(age) {
    return age >= 18;
}

console.log("Is 16 adult?", isAdult(16));
console.log("IS 22 adult?", isAdult(21));

// Use return value in other code
let userAge = 20;
if (isAdult(userAge)) {
    console.log("User can vote!");
} else {
    console.log("User cannot vote yet.");
}

console.log("");

// Calculator functions
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function calculateArea(length, width) {
    return length * width;
}

// Test the calculator functions
console.log("Multiplly 6 × 4 =", multiply(6, 4));
console.log("Divide 15 ÷ 3 =", divide(15, 3));
console.log("Divide 15 ÷ 0 =", divide(15, 0));
console.log("Area of 5×3 room =", calculateArea(5, 3), "Square units");

console.log("");

// Basic if Statements

let age = 25;
let temperature = 75;
let isRaining = false;

// Simple if statement
if (age >= 18) {
    console.log("You are an adult!");
}

// IF...else statememt
if (temperature > 80) {
    console.log("it's hot today!");
} else {
    console.log("The weaather is nice!");
}

console.log("");

// Using variables in conditions
let score = 85;
let passingGrade = 70;

if (score >= passingGrade) {
    console.log(`Congratulations! You passed with ${score}%`);
} else {
    console.log(`Sorry you scored ${score}%. You need ${passingGrade}% to pass.`);
}

console.log("");

// Multiple Conditions with else if
let grade = 87;

if (grade >= 90) {
    console.log("Grade: A - Excellent!");
} else if (grade >= 80) {
    console.log("Grade: B - Good Work!");
} else if (grade >= 70) {
    console.log("Grade: C - Satisfactory");
} else if (grade >= 60) {
    console.log("Grade: D - Need improvement");
} else {
    console.log("Grade: F - Please see instructor");
}

console.log("")

// Weather decision sysytem
let temperatures = 45;
let isSnowing = false;

if (temperatures < 32 && isSnowing) {
    console.log("Bundle up! It's freezing and snowing!");
} else if (temperatures < 32) {
    console.log("IT's freezing! Wear a heavy coat!");
} else if (temperatures < 50) {
    console.log("It's chilly. A jacket would be good.");
} else if (temperatures < 70) {
    console.log("Nice waether! A light sweater is perfect.");
} else {
    console.log("It's warm! T-shirt weather!");
}

console.log("");

// Time-based greeting
let hours = 14; // 24-hours format (2 PM)

if (hours < 12) {
    console.log("Good morning!");
} else if (hours < 18) {
    console.log("Good afternoon!")
} else {
    console.log("Good evening!");
}

// Logical Operators Examples
let ages = 22;
let hasLicense = true;
let hasInsurance = false;
let isWeekeend = true;
let isHoliday = false;
let weather = "sunny";

// AND operators (&&) - both conditions must be true
if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive yet.");
}

// Multiple AND conditions
if (age >= 18 && hasLicense && hasInsurance) {
    console.log("You can drive legally!");
} else {
    console.log("You're missing something to drive legally.");
}

console.log("");

// OR operator (||) - at least one condition must be true
if (isWeekeend || isHoliday) {
    console.log("No work today!");
} else {
    console.log("Time to work!");
}

// NOT operator (!) - flips the boolean value
if (!hasInsurance) {
    console.log("Warning: You don't have insurance!");
}

console.log("");

// Combining different logical operators
if ((isWeekeend || isHoliday) && weather === "sunny") {
    console.log("Perfect day for a picnic!");
}

console.log("");

// Complex codition example
let temperaturee = 75;
let humidity = 40;

if (temperaturee >= 70 && temperaturee <= 85 && humidity < 60 && !isRaining) {
    console.log("Perfect weather conditions!");
} else {
    console.log("Weather could be better.");
}

console.log("");

// Function that uses conditionals to make decisions
function checkPassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (password === "password" || password === "123456") {
        return "Password too common! Choose something more secure."
    } else if (password.length > 20) {
        return "Password too long! Keep it under 20 characters.";
    } else {
        return "Password looks good!"
    }
}

// Test the password function
console.log("Testing Passwords:");
console.log(checkPassword("abc"))
console.log(checkPassword("password"))
console.log(checkPassword("mySecurePass123"))
console.log(checkPassword("thisPasswordIsWayTooLongToBeUseful"));

console.log("");

// Function that categorizes age groups
function getAgeGroup(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 60) {
        return "Adult";
    } else {
        return "Senior"
    }
}

// Test age groups
let agee = [5, 16, 25, 45, 67];
agee.forEach(age => {
    console.log(`Age ${age}: ${getAgeGroup(age)}`);
});

console.log("");

// Function that calculates discounts
function calculateDiscount(price, customerType, isFirstTime) {
    let discount = 0;

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }

    // Additional discount for first-time customers
    if (isFirstTime) {
        discount += 0.5;
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

// Test discount function
let result = calculateDiscount(100, "student", true);
console.log("Price calculate:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);

console.log("");

// Ternary Operator Examples

let agees = 20;
let temperaturees = 85;
let scoree = 92;
let isLoggedIn = true;

// Basic ternary operator usage
let status = age >= 18? "adult" : "minor";
console.log(`Status: ${status}`)

// Ternary in template literals
let greeting = `Good ${temperaturees > 80 ? "hot" : "nice"} day!`;
console.log(greeting)

// Ternary for function calls
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// Multiple ternary operators (be careful - can get confusing)
let grades = score >= 90 ? "A" : score >= 80? "B" : score >= 70 ? "C" : "F";
console.log(`Grade: ${grade}`);

console.log("");

// Function using ternary operator
function getShippingCost(orderAmount, isPremium) {
    return orderAmount > 50 ? 0 : isPremium ? 5 : 10;
}

console.log("Shipping examples:");
console.log(`$30 order, regular: $${getShippingCost(30, false)}`);
console.log(`$30 order, regular: $${getShippingCost(30, true)}`);
console.log(`$60 order, regular: $${getShippingCost(60, false)}`);

console.log("");

// Ternary in arrays and objects
let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 16},
    {name: "Charlie", age: 30}
];

users.forEach(user => {
    let canVote = user.age >= 18 ? "Yes" : "No";
    console.log(`${user.name} (${user.age}) can vote: ${canVote}`);
});

console.log("");

// Function expressions (storing function in a variable)
const calculateTax = function(amount, rate) {
    return amount * rate;
};

console.log("Tax on $100 at 8.5%:", calculateTax(100, 0.085));

// Arrow functions (modern, shorter syntax)
const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

// Even shorter arrow function (one-line)
const convertToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

console.log("25°C in Fahrenheit:", convertToFahrenheit(25));
console.log("77°F in celsius:", convertToCelsius(77).toFixed(1));

console.log("");

// Functions that call other functions
function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
}

function healthCheck(weight, height) {
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    return {
        bmi: bmi.toFixed(1),
        category: category,
        message: `Your BMI is ${bmi.toFixed(1)} (${category})`
    };
}

// Test the health check system
const results = healthCheck(70, 1.75);
console.log("Health Check Result:");
console.log(results.message);

console.log("");

// Function with multiple return paths
function getDiscountMessage(totalAmount, membershipType) {
    if (totalAmount < 50) {
        return "Minimum order is $50 for discounts.";
    }

    if (membershipType === "gold") {
        return `Gold member discount: ${totalAmount * 0.15}`;
    }

    return "Regular customer - no discount available.";
}

// Test discount messages
console.log("Discount examples:");
console.log(getDiscountMessage(30, "gold"));
console.log(getDiscountMessage(100, "gold"));
console.log(getDiscountMessage(100, "silver"));
console.log(getDiscountMessage(100, "regular"));

// Pattern 1: Validation function
function isValidEmail(email) {
    return email.includes("@") && email.includes(".")
}

// Pattern 2: formatter function
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`
}

// Pattern 3: Decision maker function
function shouldBuyItem(price, budget, necessity) {
    if (necessity === "essential") {
        return price <= budget;
    } else if (necessity === "important") {
        return price <= budget * 0.7;
    } else {
        return price <= budget * 0.3;
    }
}

// Pattern 4: Data processor function
function analyzeGrades(grades) {
    const total = grades.rdeuce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    const highest = Math.max 
}