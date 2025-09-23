function getGrade() {

    let score = Number(prompt("Enter your Grade"))

    if (score === 100) {
        console.log(`score: ${score} → Outstanding! Grade: A+`);
    } else if (score >= 90 && score <= 99) {
        console.log(`Score: ${score} → Grade: A`);
    } else if (score >= 80 && score <= 89) {
        console.log(`Score: ${score} → Grade: B`);
    } else if (score >= 70 && score <= 79) {
        console.log(`Score: ${score} → Grade: C`);
    } else if (score >= 60 && score <= 69) {
        console.log(`Score: ${score} → Grade: D`);
    } else if (score >= 50 && score <= 59) {
        console.log(`Score: ${score} → Grade: F`);
    } else if (score <= 50) {
        console.log(`Score: ${score} → Go and see Mr Badiru`);
    }

    
}   



function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0

    if (customerType == "student") {
        discount = 0.10;
    } else if (customerType == "senior") {
        discount = 0.15;
    } else if (customerType == "employee") {
        discount = 0.20;
    }

    if (isFirstPurchase) {
        discount += 0.05
    }

    let finalprice = price * (1 - discount);
    return {
        orinalPrice: price,
        discountPercent: discount,
        finalprice: finalprice.toFixed(2)
    };
}

let result = calculatePrice(10000, "student", true);
console.log("                   Full Receipt          ");
console.log(`original: $${result.orinalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalprice}`)



function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!");
    } else if (temperature < 32) {
        console.log("Very cold, wear a heavy coat.");
    } else if (temperature >= 32 && temperature <= 60 ) {
        console.log("Chilly, bring a jacket.")
    } else if (temperature >= 60 && temperature <= 80) {
        console.log("Nice weather!");
    } else if (temperature > 80) {
        console.log("It's hot, stay hydrated!");
    }

advice = isRaining ? "Bring an umbrella" : "No umbrella needed"
console.log(advice)
    
} 
weatherAdvice(30, true)

// function atm(balance, action, amount) {
//     if (balance == withdra )
// }