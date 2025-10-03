// Task 1
let movie = {
    title: "Fast X",
    director: "Louis Leterrier",
    releaseYear: 2023,
    rating: 5.7,
  getSummary: function () {
        return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
};
movie.isWatched = true;
console.log(movie.getSummary());
console.log(`Watched: ${movie.isWatched}`);

console.log("")

let movieList = [
  {
    title: "The Beekeeper",
    director: "David Ayer",
    releaseYear: 2024,
    rating: 6.7,
    isWatched: true
  },
  {
    title: "Rampage",
    director: "Brad Peyton",
    releaseYear: 2018,
    rating: 6.1,
    isWatched: true
  },
  {
    title: "The Working Man",
    director: "David Ayer",
    releaseYear: 2025,
    rating: 5.7,
    isWatched: false
  }
];

function highltRatedMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
        console.log(movies[i].title + " - " + movies[i].rating + "/10");
    }
  }
}

// Task 2
let cartItem = {
  name: "cap",
  price: 5000,
  quantity: 2,
  
  getTotal: function () {
    return this.price * this.quantity;
  }
};
console.log("Total for " + cartItem.name + ": $" + cartItem.getTotal());

console.log("")

let cart = [
  {
    name: "Bag",
    price: 5000,
    quantity: 1,
    getTotal: function () {
      return this.price * this.quantity;
    }
  },
  {
    name: "3ake",
    price: 500,
    quantity: 2,
    getTotal: function () {
      return this.price * this.quantity;
    }
  },
  {
    name: "Pen",
    price: 100,
    quantity: 3,
    getTotal: function () {
      return this.price * this.quantity;
    }
  }
];

function getCartTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].getTotal();
  }
  console.log("Total cost of all items: $" + total);
  return total;
}
console.log("Total cost =",getCartTotal(cart));

console.log("")

// Task 3
let member = {
  name: "Alvin",
  membershipType: "basic",
  borrowedBooks: [],

  borrowBook: function (book) {
    this.borrowedBooks.push(book);
    console.log(this.name + " borrowed: " + book);
  },

  getBorrowedCount: function () {
    return this.borrowedBooks.length;
  },

  getMembershipInfo: function () {
    if (this.membershipType === "premium") {
      return "Premium members can borrow unlimited books.";
    } else {
      return "Basic members can borrow up to 5 books.";
    }
  }
};

member.borrowBook("The Hunger Games");
member.borrowBook("Pride and prejudice");
console.log("Books borrowed: " + member.getBorrowedCount());
console.log(member.getMembershipInfo());