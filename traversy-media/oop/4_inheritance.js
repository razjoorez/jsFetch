//Constructor

function Book(title,author,year) {
    this.title = title;
    this.year = year;
    this.author = author;
}

//getSummry

Book.prototype.getSummary = function() {
    return `${this.title} was written by
    ${this.author} in ${this.year}`;
};


//Magazine constructor

function Magazine(title,author,year,month) {
    Book.call(this,title,author,year);

    this.month = month;
}

//Inherit Prototype

Magazine.prototype = Object.create(Book.prototype);


//Instantiate Magazine Object

const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');

console.log(mag1);

console.log(mag1.getSummary());

//Use Magazine Constructor

Magazine.prototype.constructor = Magazine;

const mag2 = new Magazine('Mag two', 'John Doe', '2018', 'Jan');
console.log(mag2)




