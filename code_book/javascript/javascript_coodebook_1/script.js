function runFirstProgram() {
    // This is a comment - JavaScript ignore this line
    //Let's display a message in our output area
    document.getElementById('first-output').innerHTML = 'Hello World! This message was creadted by JavaScript!'

    // Also show it in the browser console (open Developer Tool to see)
    console.log('Hello from Javascript console!');
}

function showAlert() {
    // Show a popup alert
    alert('This is a JavaScript alert!')
}

function showBasicVariables() {
    // creating variables with different declarations
    let studentName = "Alice";
    const schoolName = "Tech Academy"
    let age = 25;

    // Display the variables
    let output = `
        <strong>Basic Variable:</strong><br>
        Student Name: ${studentName}<br>
        School Name: ${schoolName}<br>
        Age: ${age}<br><br>
        <em>studentName and age use 'let' (can be changed)<br>
        schoolName uses 'const' (cannot be changed)</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
    console.log('student:', studentName, 'Age:', age, 'School:', schoolName)
}

function showVariableTypes() {
    // Different data types
    let userName = "John Doe";               // String
    let userAge = 30;                       // Number
    let isActive = true;                   // Boolean
    let salary = 50000.50;                // Number (with decimals)
    let middleName = null;               // Nill
    let nickname;                       // Undefined (not assigned)

    let output = `
        <strong>Variable Types:</strong><br>
        userName: "${userName}" (type: ${typeof userName})<br>
        UserAge: ${userAge} (type: ${typeof userAge})<br>
        isActive: ${isActive} (type: ${typeof isActive})<br>
        salary: ${salary} (type: ${typeof salary})<br>
        middleNAme: ${middleName} (type: ${typeof middleName})<br>
        nickname: ${nickname} (type: ${typeof nickname})<br>
    `;

    document.getElementById('variables-output').innerHTML = output;
}

function demonstrateConstVsLet() {
    let changeable = "I can be changed";
    const permanent = "I cannot be changed";

    // change the let variable
    // changeable = "I have been changed!";

    // Try to change const (this would cause an error)
    // permanent = "This would cause an error!"; // Don't uncomment this!

    let output = `
        <strong>const vs let:</strong>
        changeable (let): "${changeable}"<br>
        permanent (const): "${permanent}"<br><br>
        <em>The 'let' variable was successfully changed.<br>
        Trying to change a 'const' variable would cause an error!</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
}

function variableNamingExamples() {
    // Good variable names (descriptive and follow conventions)
    let firstName = "Maria";
    let lastName = "Garcia";
    let phoneNumber = "555-0123";
    let isLoggedIn = true;
    let totalPrice = 99.99;

    // Examples of what NOT to do (but still valid)
    let a ="Bad name - not descriptive";
    let x123 = "Confusing name";

    let output = `
        <strong>Variable Naming Examples:</strong><br><br>
        <strong>Good Names (descriptive):</strong><br>
        firstNAme: ${firstName}<br>
        lastName: ${lastName}<br>
        phoneNumber: ${phoneNumber}<br>
        isLoggedIn: ${isLoggedIn}<br>
        totalPrice: ${totalPrice}<br><br>
        <strong>poor Names (avoid these):</strong><br>
        a: "${a}"<br>
        x123: "${x123}"<br><br>
        <em>Use camelcase and descriptive names!</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
}

function exploreStrings() {
    // Different ways to create strings
    let singleQuotes = 'Hello World';
    let doubleQuotes = "JavaScript is fun";
    let templateLiteral = `Today is ${new Date(). toDateString()}`;

    // String properties and methods
    let message = "Learning JavaScript";
    let length = message.length;
    let uppercase = message.toUpperCase();
    let lowercase = message.toLowerCase();

    let output = `
        <strong>Working with Strings:</strong><br><br>
        Single quotes: '${singleQuotes}'<br>
        Double quotes: "${doubleQuotes}"<br>
        Template literal: \`${templateLiteral}\`<br><br>
        <strong>String Methods:</strong><br>
        Original: "${message}"<br>
        Length: ${length} characters<br>
        Uppercase: "${uppercase}"<br>
        LowerCase: "${lowercase}"<br><br>
        <em>Tempelate literals (\`) allow embedding variables with \${}</em>
    `

    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreNumbers() {
    // Different number types
    let integer = 42;
    let decimal = 3.14159;
    let negative = -17;
    let scientific = 2.5e6; // 2,500,000

    // Math operations
    let sum = 10 + 5;
    let difference = 20 - 8;
    let product = 6 * 7;
    let quotient = 15 / 3;
    let remainder = 17 % 5;

    // Special number values
    let infinity = 1 / 0;
    let notANumber = "hello" * 5;

    let output = `
        <strong>Working with Numbers:</strong><br><br>
        Integer: ${integer}<br>
        Decimal: ${decimal}<br>
        Negative: ${negative}<br>
        Scientific notation: ${scientific}<br><br>
        <strong>Math Operations:</strong><br>
        10 + 5 = ${sum}<br>
        20 - 8 = ${difference}<br>
        6 × 7 = ${product}<br>
        15 ÷ 3 = ${quotient}<br>
        17 % 5 = ${remainder} {remainder}<br><br>
        <strong>Special Values:</strong><br>
        1 / 0 = ${infinity}<br>
        "hello" * 5 = ${notANumber}<br>
    `;

    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreBooleans() {
    // Boolean
    let isTrue = true;
    let isFalse = false;

    // Boolean from comparisons
    let isGreater = 10 > 5;         // true
    let isEqual = 5 === 5;         // true
    let isNotEqual = 3 !== 7;     // true
    let isLessOrEqual = 4 <= 4;  // true

    // Truthy and falsy values
    let truthyString = Boolean("hello");  // true
    let falsyString = Boolean("");       // false
    let truthyNumber = Boolean(42);     // true
    let falsyNumber = Boolean(0);      // false

    let output = `
        <strong>Working with Booleans:</strong><br><br>
        <strong>Direct Boolean Values:</strong><br>
        isTrue: ${isTrue}<br>
        isFalse: ${isFalse}<br><br>
        <strong>Truthy vs Falsy:</strong><br>
        10 > 5: ${isGreater}<br>
        5 === 5: ${isEqual}<br>
        3 !== 7: ${isNotEqual}<br>
        4 <= 4: ${isLessOrEqual}<br><br>
        <Strong>Truthy vs Falsy:</strong><br>
        Boolean("hello"): ${truthyString}<br>
        Boolean(""): ${falsyString}<br>
        Boolean("42"): ${truthyNumber}<br>
        Boolean("0"): ${falsyNumber}<br><br>
        <em>Empty strings, 0, null, undefined are "falsy"</em>
    `;

    document.getElementById('datatypes-output').innerHTML = output;
}

function exploreSpecialValues() {
    // Undefined variable
    let undefinedvar;

    // Null value
    let nullVar = null;

    // Check types
    let definedVar = "I have a value"

    let output = `
        <strong>special values:</strong><br><br>
        <srong>Undefined:</strong><br>
        Value: ${undefinedvar}<br>
        Type: ${typeof undefinedvar}<br><br>
        <strong>Null:</strong><br>
        Value: ${nullVar}<br>
        Type: ${typeof nullVar} (this is a JavaScript quirk!)<br><br>
        <strong>Defined Variable:</strong><br>
        Value: "${definedVar}"<br>
        Type: ${typeof definedVar}<br><br>
        <strong>Key Differences:</strong><br>
        • undefined: variable exists but has no value<br>
        • null: Intentionally set to "no value"<br>
        • Both are "falsy" in boolean context
    `;

    document.getElementById('datatypes-output').innerHTML = output;
}