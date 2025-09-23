function getGrade(score) {
    if (score == 100) {
        return `score: ${score} → Outstanding! Grade: A+`;
    } else if (score >= 90 && score <= 99) {
        return `Score: ${score} → Grade: A`
    } else if (score >= 80 && score <= 89) {
        return `Score: ${score} → Grade: B`
    } else if (score >= 70 && score <= 79) {
        return `Score: ${score} → Grade: C`
    } else if (score >= 60 && score <= 69) {
        return `Score: ${score} → Grade: D`
    } else if (score >= 50 && score <= 59) {
        return `Score: ${score} → Grade: F`
    } else if (score <= 50) {
        return `Score: ${score} → Go and see Mr Badiru`
    }

    console.log(getGrade(49))
}   


function calculatePrice(price, customerType, isFirstPurchase) {

}