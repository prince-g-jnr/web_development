function showArithmeticOperators() {
    let num1 = Number(prompt("Enter a number"));
    let num2 = Number(prompt("Enter a number"));

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let remainder = num1 % num2;

    let output = `
        <strong>Arithmetic Operators:</strong><br><br>
        num1 = ${num1}, num2 =${num2}<br><br>
        Addition (num1 +  num2): ${addition}<br>
        Subtraction (num1 - num2): ${subtraction}<br>
        Multiplication (num1 * num2): ${multiplication}<br>
        Division (num1 / num2): ${division}<br>
        Remainder (num1 % num2): ${remainder}<br>
    `;

    document.getElementById('operators-output').innerHTML = output;
}