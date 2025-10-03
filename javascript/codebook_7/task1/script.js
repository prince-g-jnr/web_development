class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }
    getSummary(){
        let borrowed = this.isBorrowed? "This book has been borrowed": "This book is available";
        return `Book: ${this.title} by ${this.author} (${this.year}).  ${borrowed} `
    }

    borrowBook(){
        this.isBorrowed = true;
        return `This book ${this.title} by ${this.author} (${this.year}) has been borrowed.`
    }
}

let book1 = new Book("The Great Gatsby", "F. Scoot Fitzgerald", 1925);
let book2 = new Book("Jane Eyre", "Charloote Bronte", 1847);

console.log(book1.getSummary());
console.log(book2.getSummary());
book1.borrowBook();
book2.borrowBook();

console.log("")

console.log(book1.getSummary());
console.log(book2.getSummary());