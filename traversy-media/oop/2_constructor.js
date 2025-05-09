//Constructor

function Book(title,author,year) {
    this.title = title;
    this.year = year;
    this.author = author;
    console.log('Book Initialized..');
    this.getSummary = function() {
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    }
}


//Instantiate an Object

const book1 = new Book('book one', 'john doe', '2013');  //runs

console.log(book1.getSummary());




