// SYNCHRONOUS (blocking) - Everything waits
console.log("Step 1: Start cooking");

// Simulate waiting 5 minutes (blocking loop)
for (let i = 0; i < 1e10; i++) {}

console.log("Step 2: Food ready");
console.log("Step 3: Serve customer")

console.log("")

// OUTPUT
console.log("Step 1: Start cooking");
console.log("Step 2: Wait 5 minutes....");    // Website freezes here
console.log("Step 3: Food raedy");
console.log ("Step 4: Serve customer");

console.log("")

// ASYCHRONOUS (non-blocking) - Life continues while waiting
console.log("Step 1: Start cooking");

setTimeout(() => {
    console.log("Step 3: Food ready after 5 minutes");
}, 5000); // This doesn't freeze the website

console.log("Step 2: Serve other customers while waiting");
console.log("Step 4: Take more orders");

console.log("")

// Simple callback example
function greetUser(name, callback) {
    console.log("Hello," + name);
    callback(); // Call the function that was passed in
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Pass sayGoodbye as a callback
greetUser("Alice", sayGoodbye);

// Simulate getting data from a server
function getMenuItems(callback) {
    console.log("Fetching menu items...");

    // Simulate 2 seconds delay
    setTimeout(() => {
        let menuItems = ["Cofee", "Sandwich","Cake"]
        callback(menuItems); // Call the callback with the data
    }, 2000);
}

// USe the function
getMenuItems(function(items) {
    console.log("Got menu items:", items);
});

console.log("Doing other things while waiting")

console.log("")

// Simulate order processing with callbacks
function placeOrder(orderDetails, successCallback, errorCallback) {
    console.log("Processing order:", orderDetails);

    setTimeout(() => {
        // Simulate success or failure
        let orderSuccessful = Math.random() > 0.2; // 80% success rate

        if (orderSuccessful) {
            successCallback({
                orderID: 12345,
                message: "Order placed successfully!"
            });
        } else {
            errorCallback("Paymeny failed. Please try again.");
        }
    }, 2000);
}

// USe the function
placeOrder(
    {item: "Latte", quantity: 2},
    function(result) {
        console.log("Success:", result.message);
        console.log("Order ID:, result")
    }
);

// Create a simple promise
let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Operation successful!"); // Promise fulfilled
    } else {
        reject("Operation failed!"); // Promise rejected
    }
});

// Use Promise
myPromise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

console.log("")

//  PIZZA ORDER EXAMPLE
let pizzaOrder = new Promise((resolve, reject) => {
    let ovenWorking = true; // Try changing this to false

    if (ovenWorking) {
        resolve("Your pizza is ready 🍕"); // Fulfilled
    } else {
        reject("Sorry, the oven broke 😢"); // Rejected
    }
});

// Use the promise
pizzaOrder
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Promise with Delay
function getMenuItems() {
    return new Promis(function(resolve, reject) {
        console.log("Fetching menu items...");

        setTimeout(() => {
            let menuItems = ["Coffee", "Sandwich", "Cake"];
            resolve(menuItems); // Success!
        }, 2000);
    });
}

// Use the Promise
getMenuItems()
    .then(function(items) {
        console.log("Got items:", items)
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

console.log("This runs while waiting...");

// Function that returns a promise
function getMenuItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Coffee", "Sandwich", "Cake"]);
        }, 2000);
    });
}

// Traditional promise way
getMenuItems().then(items => {
    console.log("Items:", items);
});

// Async/await way (cleaner!)
async function displayMenu() {
    console.log("Fetching manu...");

    let items = await getMenuItems(); // Wait for the promise

    console.log("Items:", items);
}

displayMenu();

console.log("")

function getMenuItems() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Coffee", "Sandwich"]), 1000);
    });
}

function calculatePrice(stockInfo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ...stockInfo, total: 12.50 }), 1000);
    });
}

// USing async/await - much cleaner!
async function processOrder() {
    console.log("Starting order...");
    
    let items = await getMenuItems();
    console.log("Got items:", items);

    let stockInfo = await checkStock(items);
    console.log("Checked stock:", stockInfo);

    let finalOrder = await calculatePrice(stockInfo);
    console.log("Final order:", finalOrder);

    return finalOrder;
}

// call the async function
processOrder();

// Error Handling with Try/Catch

function placeOrder(orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.3;

            if (success) {
                resolve({ orderId: 12345, status: "confirmed"});
            } else {
                reject("Payment failed");
            }
        }, 2000);
    });
}
// a
async function submitOrder() {
    try{
        console.log("Placing order...");

        let result = await placeOrder({item: "Latte"});

        console.log("Success! Order ID:", result.orderID);

    } catch (error) {
        console.log("Error:", error);
    }
}

submitOrder();


// Simple Café Example
// 1. Simulate making coffee (takes 3 seconds)
function makeCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Your coffee is ready!");
        }, 3000);
    });
}

// 2. place an order
async function orderCoffee() {
    let output = document.getElementById("output");
    output.innerHTML = "⏳ Making your coffee... Please wait.";

    try {
        let result = await makeCoffee(); // wait for the coffee
        output.innerHTML = result;
    } catch (error) {
        output.innerHTML = "❌ Someting went wrong: " + error;
    }
}