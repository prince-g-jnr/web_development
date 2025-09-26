// Task 1
shoppingList = ["cream", "book", "biro", "pencil", "bag"];
console.log("Shoping List:", shoppingList );

console.log("")

shoppingList.push("shoe");
console.log("After adding new item:", shoppingList);

console.log("")

shoppingList.shift()
console.log("Shoping List after removing:", shoppingList);

console.log("")

console.log("Number of items:", shoppingList.length);

console.log("")

for (let i = 0; i <=  shoppingList.length; i++) {
    console.log(`item ${i + 1}: ${shoppingList[i]}`)
};