class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const library = [
    new Book("Atomic Habits", "James Clear", "111"),
    new Book("Clean Code", "Robert Martin", "222"),
    new Book("Harry Potter", "J.K. Rowling", "333", true)
];

console.log("Available Books:");
library.filter(book => !book.isIssued)
       .forEach(b => console.log(`${b.title} (${b.isbn})`));

function issueByISBN(isbn) {
    const found = library.find(book => book.isbn === isbn);
    if (found && !found.isIssued) {
        found.issueBook();
        console.log(`${found.title} issued successfully`);
    } else {
        console.log("Book not found or already issued");
    }
}

issueByISBN("222");
