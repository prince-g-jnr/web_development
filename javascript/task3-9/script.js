//  Task 3
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


// Task 4
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


// Task 5
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


// Task 6
let balance = 20000
function atm(balance, action, amount) {
    if (action === "withdraw" ) {
        if (amount > 500) {
            return "Maximum with is 500"
        }else if (balance >= amount) {
            balance -+ amount;
            return `Withdrawal Successful. New balance: $${balance}`;
        } else {
            return `Insufficient funds. Your balance is $${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Deposit Successful. New balance: $${balance}`;
    } else {
        return "unknow application, use 'withdraw' or 'deposit'";
    }
}
console.log(atm(balance, "deposit", 10000))


// Task 7
function personalAssistant(time, weather, daytype) {
    let message = daytype === "workday" ? "Prepare your mind for work!" :
                  daytype === "weekend" ? "Enjoy some rest, it's the weekend!" :
                  daytype === "holiday" ? "Enjoy your Holiday!" : "Invalid day selection"
    message += (weather === "sunny") ? "Remember to take sun protection if you are going out." :
               (weather === "rainy") ? "Keep an umbrella handy." :
               (weather === "cloudy") ? "Seem like a calm day ahead." : "Unknown weather status."
    if (time < 12 && time >=0) {
        message += "Wishing you a wonderful morning!";
    } else if (time >= 12 && time < 18) {
        message += "Wishing you a successful afternoon";
    } else if (time >=18 && time <= 23) {
        message += "Settle in for the evening";
    } else{
        message += "Unrecognized time format.";
    }
    console.log(message);
}

// Task 8
// 1

// 2
function formatPercentage(value) {
    return `${value.toFixed(1)}%`
}
console.log(formatPercentage(100));

// 3
function calculateCompoundInterest(principal, rate, years) {
    let A = principal * (1 + rate)**years
    return `${A.toFixed(2)}`
}
console.log(calculateCompoundInterest(500, 0.5, 2));

// 4
function canGraduate(credits, gpa) {
    if(credits >= 120 && gpa >+ 2.0) {
        return "You can Graduate"
    } else {
        return "You cannot Graduate"
    }
}
console.log(canGraduate(200, 3.5))

// 5
function reverseWord(sentence) {
    let word = sentence.split(" ")
    let sentences =word.reverse()
    return sentences
}
console.log(reverseWord('I am a content creator'))

// Task 9