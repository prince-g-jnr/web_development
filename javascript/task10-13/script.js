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
function formatList(shoppingList) {
    for (let i = 0; i <=  shoppingList.length; i++) {
        console.log(`item ${i + 1}: ${shoppingList[i]}`)
    };
}
formatList(shoppingList)

console.log("")

// Task 2
let grades = [40, 50, 60, 70, 80, 90, 100]
function getAverage(grades) {
    let total = 0;
    for (let grade of grades) {
        total += grade
    };
    let average = total / grades.length
        return `Average Grade: ${average}`;
}
console.log(getAverage(grades))

console.log("")

function getHighest(grades) {
    let highest = grades[0]
    for (let grade of grades) {
        if (grade > highest) {
            highest = grade
        };
    }
    return `Highest grade: ${highest}`;
}
console.log(getHighest(grades))

console.log("")

function getLowest(grades) {
    let lowest = grades[0];
    for (let grade of grades) {
        if (grade < lowest) {
            lowest = grade
        };
    }
    return `Lowest Grade: ${lowest}`;
}
console.log(getLowest(grades))

console.log("")

function getPassRate(grades) {
    let pass = []
    for (let grade of grades) {
        if (grade >= 50) {
            pass.push(grade)
            passLength = pass.length
        }
    }
    console.log(`Number of student Above (50): ${pass}`)
    let averagePassed = (passLength / grades.length) * 100 
    return `${averagePassed.toFixed(1)}% of passed student`
}
console.log(getPassRate(grades))

console.log("")

// Task 3
let movies = ["Cleaner", "Fast X", "BeeKeeper", "Lift", "Back in Action"]
let ratings = [5.2, 5.7, 6.3, 5.5, 5.9]

function addMovie(movie, rating) {
    movies.push(movie)
    ratings.push(rating)
}
console.log(addMovie("Rebel Ridge", 6.8))
console.log(movies, ratings)

console.log("")

function getAverageRating() {
    let total = 0
    for (let rate of ratings) {
        total += rate
    }
    
    let average = total / ratings.length
    return average.toFixed(1)
}
console.log(`Average Rating: ${getAverageRating(ratings)}`)

console.log("")

function getTopMovie () {
    if (movies.length === 0) {
        return "No Movie available."
    }
    let topMovie = movies[0]
    let highest = ratings[0]

    let i = 0
    for (let high of ratings) {
        if (high > highest) {
            topMovie = movies[i]
        }
        i ++
    } 
    return `Top Movie: ${topMovie}`
}
console.log(getTopMovie())

console.log("")

function summary(movies, ratings) {
    console.log("===== Movies Ratings Summary =====")
    let movie =[]
    let rate = []
    movie.push(movies)
    rate.push(ratings)
    for ( let i = 0; i < [movie.length, rate.length]; i ++) {
        
    }
}