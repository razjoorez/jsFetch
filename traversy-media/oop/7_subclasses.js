class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    }

    // getAge() {
    //     const years = new Date().getFullYear()-this.year;
    //     return `${this.title} is ${years} old`;
    // }

    // revise(newYear) {
    //     this.year  = newYear;
    // this.revised = true;
    // }

    // static topBookStore() {
    //     return 'Barnes & Noble';
    // }
}

//Instantiate Objec

// const book1 = new Book('Book1','John Doe', '2013');

// console.log(book1);

// book1.revise('2018');
// console.log(book1);

// console.log(Book.topBookStore());


//Magazine Subclass
class Magazine extends Book {
    constructor(title,author,year,month) {
        super(title,author,year);
        this.month;
    }
}


// Instantiate Magazine

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1.getSummary())


